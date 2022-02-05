import { useEffect, useMemo, useState } from 'react';

const useOrientation = function useOrientation() {
  const [orientation, setOrientation] = useState('');

  const [isLandscape, isPortrait] = useMemo(() => {
    const [orientationType] = orientation.split('-');

    return [orientationType === 'landscape', orientationType === 'portrait'];
  }, [orientation]);

  useEffect(() => {
    const setOrientationType = () => {
      const [orientationType] = window.screen.orientation.type.split('-');
      setOrientation(orientationType);
    };

    setOrientationType();
    window.screen.orientation.onchange = setOrientationType;
  }, []);

  return {
    orientation,
    isLandscape,
    isPortrait,
  };
};

export default useOrientation;
