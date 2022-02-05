import { useEffect, useState } from 'react';

const useStorage = function useStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};

export default useStorage;
