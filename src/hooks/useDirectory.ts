import { useState } from 'react';

const useDirectory = function useDirectory() {
  const [directory, setDirectory] = useState<
    (FileSystemDirectoryHandle | FileSystemFileHandle)[]
  >([]);

  const getDirectory = async () => {
    const handle = await window.showDirectoryPicker();
    const contents = [];

    /* eslint-disable no-restricted-syntax */
    for await (const value of handle.values()) contents.push(value);
    /* eslint-enable no-restricted-syntax */

    setDirectory(
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

  return [directory, getDirectory] as const;
};

export default useDirectory;
