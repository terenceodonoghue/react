import { useCallback, useMemo, useState } from 'react';

const useEyeDropper = function useEyeDropper() {
  const [colour, setColour] = useState<string>();

  const eyeDropper = useMemo(() => new EyeDropper(), []);

  const getColour = useCallback(async () => {
    const { sRGBHex } = await eyeDropper.open();
    setColour(sRGBHex);
  }, [eyeDropper]);

  return [colour, getColour];
};

export default useEyeDropper;
