import { useEffect, useMemo, useState } from 'react';

const useOrientation = function useOrientation() {
  const [orientation, setOrientation] = useState('');

  const [isLandscape, isPortrait] = useMemo(() => {
    const [orientationType] = orientation.split('-');

    return [orientationType === 'landscape', orientationType === 'portrait'];
  }, [orientation]);

  useEffect(() => {
    const getOrientation = () => {
      const [orientationType] = window.screen.orientation.type.split('-');
      setOrientation(orientationType);
    };

    getOrientation();

    window.screen.orientation.onchange = getOrientation;
  }, []);

  return {
    orientation,
    isLandscape,
    isPortrait,
  };
};

export default useOrientation;
