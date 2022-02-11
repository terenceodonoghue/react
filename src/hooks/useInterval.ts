import { useEffect, useRef } from 'react';

const useInterval = function useInterval(
  callback: () => void,
  delay: number,
  active = true,
) {
  const callbackRef = useRef(callback);
  const intervalRef = useRef<number>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (callbackRef.current && active) {
      intervalRef.current = window.setInterval(callbackRef.current, delay);
    }

    return () => clearInterval(intervalRef.current);
  }, [active, delay]);
};

export default useInterval;
