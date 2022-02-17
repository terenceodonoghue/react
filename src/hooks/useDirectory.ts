import { useState } from 'react';

const useDirectory = function useDirectory() {
  const [entries, setEntries] = useState<
    (FileSystemDirectoryHandle | FileSystemFileHandle)[]
  >([]);

  const getDirectory = async () => {
    const directory = await window.showDirectoryPicker();

    const contents = [];

    /* eslint-disable no-restricted-syntax */
    for await (const value of directory.values()) contents.push(value);
    /* eslint-enable no-restricted-syntax */

    setEntries(contents);
  };

  return [getDirectory, entries] as const;
};

export default useDirectory;
