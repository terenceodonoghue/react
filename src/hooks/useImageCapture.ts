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

  useEffect(() => {
    onPhotoTakenRef.current = onPhotoTaken;
  }, [onPhotoTaken]);

  useEffect(() => {
    onPreviewAvailableRef.current = onPreviewAvailable;
  }, [onPreviewAvailable]);

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
    const getPreview = async () => {
      const preview = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (onPreviewAvailableRef.current) {
        onPreviewAvailableRef.current(preview);
      }

      const [track] = preview.getVideoTracks();

      setImageCapture(new ImageCapture(track));
    };

    getPreview();
  }, []);

  return takePhoto;
};

export default useImageCapture;
