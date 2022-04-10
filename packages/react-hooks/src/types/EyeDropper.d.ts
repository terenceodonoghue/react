export {};

declare global {
  class EyeDropper {
    open: () => Promise<{ sRGBHex: string }>;
  }
}
