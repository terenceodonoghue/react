import { useEffect, useMemo, useState } from 'react';

const useOrientation = function useOrientation() {
  const [orientation, setOrientation] = useState('');

  const [isLandscape, isPortrait] = useMemo(() => {
    const [orientationType] = orientation.split('-');

    return [orientationType === 'landscape', orientationType === 'portrait'];
  }, [orientation]);

  useEffect(() => {
    setOrientation(window.screen.orientation.type);

    window.screen.orientation.onchange = () => {
      setOrientation(window.screen.orientation.type);
    };
  }, []);

  return {
    orientation,
    isLandscape,
    isPortrait,
  };
};

export default useOrientation;
