/* eslint-disable max-classes-per-file */

class EyeDropper {
  open: () => Promise<{ sRGBHex: string }>;
}

interface PhotoCapabilities {
  fillLightMode: ('auto' | 'flash' | 'off')[];
  imageHeight?: {
    max?: number;
    min?: number;
    step?: number;
  };
  imagewidth: {
    max?: number;
    min?: number;
    step?: number;
  };
  redEyeReduction?: 'never' | 'always' | 'controllable';
}

interface PhotoSettings<T> {
  fillLightMode?: T;
  imageHeight?: number;
  imageWidth?: number;
  redEyeReduction?: boolean;
}

class ImageCapture {
  constructor(videoTrack: MediaStreamTrack);

  readonly track: MediaStreamTrack;

  getPhotoCapabilities(): Promise<PhotoCapabilities>;

  getPhotoSettings(): Promise<PhotoSettings<'auto' | 'off' | 'on'>>;

  grabFrame(): Promise<ImageBitmap>;

  takePhoto(
    photoSettings: PhotoSettings<'auto' | 'off' | 'flash'> = {},
  ): Promise<Blob>;
}
