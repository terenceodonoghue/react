import { useState } from 'react';

const useEyeDropper = function useEyeDropper() {
  const [colour, setColour] = useState<string>();

  const getColour = async () => {
    const eyeDropper = new EyeDropper();
    const { sRGBHex } = await eyeDropper.open();

    setColour(sRGBHex);
  };

  return [colour, getColour];
};

export default useEyeDropper;
