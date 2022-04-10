import { useCallback, useEffect, useRef, useState } from 'react';

interface usePhotoConfiguration {
  onPreviewAvailable?: (preview: MediaStream) => void;
}

const usePhoto = function usePhoto({
  onPreviewAvailable,
}: usePhotoConfiguration = {}) {
  const onPreviewAvailableRef = useRef(onPreviewAvailable);
  const [photo, setPhoto] = useState<string>();
  const [imageCapture, setImageCapture] = useState<ImageCapture>();
  const [preview, setPreview] = useState<MediaStream>();

  const cancelPreview = (mediaStream: MediaStream) =>
    mediaStream.getTracks().forEach((track) => track.stop());

  const getPhoto = useCallback(async () => {
    if (imageCapture) {
      const blob = await imageCapture.takePhoto();
      const url = URL.createObjectURL(blob);

      setPhoto(url);
    }
  }, [imageCapture]);

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

  useEffect(() => {
    return () => {
      if (photo) {
        URL.revokeObjectURL(photo);
      }
    };
  }, [photo]);

  return [photo, getPhoto] as const;
};

export default usePhoto;
