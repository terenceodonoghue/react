import { useCallback, useEffect, useRef, useState } from 'react';

interface useImageCaptureConfiguration {
  onPhotoTaken?: (objectUrl: string) => void;
  onPreviewAvailable?: (preview: MediaStream) => void;
}

const useImageCapture = function useImageCapture({
  onPreviewAvailable,
  onPhotoTaken,
}: useImageCaptureConfiguration = {}) {
  const onPhotoTakenRef = useRef(onPhotoTaken);
  const onPreviewAvailableRef = useRef(onPreviewAvailable);
  const [imageCapture, setImageCapture] = useState<ImageCapture>();
  const [preview, setPreview] = useState<MediaStream>();

  const cancelPreview = (mediaStream: MediaStream) =>
    mediaStream.getTracks().forEach((track) => track.stop());

  const takePhoto = useCallback(async () => {
    if (imageCapture) {
      const blob = await imageCapture.takePhoto();
      const url = URL.createObjectURL(blob);

      if (onPhotoTakenRef.current) {
        onPhotoTakenRef.current(url);
      }
    }
  }, [imageCapture]);

  useEffect(() => {
    onPhotoTakenRef.current = onPhotoTaken;
  }, [onPhotoTaken]);

  useEffect(() => {
    onPreviewAvailableRef.current = onPreviewAvailable;
  }, [onPreviewAvailable]);

  useEffect(() => {
    const controller = new AbortController();

    const getPreview = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (controller.signal.aborted) {
        cancelPreview(stream);
      } else {
        setPreview(stream);
      }
    };

    getPreview();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (preview) {
      if (onPreviewAvailableRef.current) {
        onPreviewAvailableRef.current(preview);
      }

      const [track] = preview.getVideoTracks();
      setImageCapture(new ImageCapture(track));
    }

    return () => {
      if (preview) {
        cancelPreview(preview);
      }
    };
  }, [preview]);

  return takePhoto;
};

export default useImageCapture;
