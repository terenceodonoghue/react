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

    setEntries(
      contents
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => {
          if (a.kind === 'directory' && b.kind === 'file') {
            return -1;
          }
          if (a.kind === 'file' && b.kind === 'directory') {
            return 1;
          }

          return 0;
        }),
    );
  };

  return [getDirectory, entries] as const;
};

export default useDirectory;
