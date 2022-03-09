import { useState } from 'react';

const useColour = function useColour() {
  const [colour, setColour] = useState<string>();

  const getColour = async () => {
    const eyeDropper = new EyeDropper();
    const { sRGBHex } = await eyeDropper.open();

    setColour(sRGBHex);
  };

  return [colour, getColour];
};

export default useColour;
