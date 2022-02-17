export {};

declare global {
  class FileSystemWritableFileStream extends WritableStream {
    write(
      data:
        | BufferSource
        | Blob
        | string
        | {
            type: 'write';
            position?: number;
            data: BufferSource | Blob | string;
          }
        | { type: 'seek'; position: number }
        | { type: 'truncate'; size: number },
    ): Promise<void>;

    seek(position: number): Promise<void>;

    truncate(size: number): Promise<void>;
  }

  interface FileSystemCreateWritableOptions {
    keepExistingData?: boolean;
  }

  interface FileSystemHandlePermissionDescriptor {
    mode?: 'read' | 'readwrite';
  }

  interface FileSystemHandle {
    readonly kind: 'file' | 'directory';
    readonly name: string;

    isSameEntry(other: FileSystemHandle): Promise<boolean>;
    queryPermission(
      descriptor?: FileSystemHandlePermissionDescriptor,
    ): Promise<PermissionState>;
    requestPermission(
      descriptor?: FileSystemHandlePermissionDescriptor,
    ): Promise<PermissionState>;
  }

  interface FileSystemFileHandle extends FileSystemHandle {
    readonly kind: 'file';

    getFile(): Promise<File>;
    createWritable(
      options?: FileSystemCreateWritableOptions,
    ): Promise<FileSystemWritableFileStream>;
  }

  interface FileSystemDirectoryHandle extends FileSystemHandle {
    readonly kind: 'directory';

    entries(): AsyncIterableIterator<
      [string, FileSystemDirectoryHandle | FileSystemFileHandle]
    >;
    getFileHandle(
      name: string,
      options?: {
        create?: boolean;
      },
    ): Promise<FileSystemFileHandle>;
    getDirectoryHandle(
      name: string,
      options?: {
        create?: boolean;
      },
    ): Promise<FileSystemDirectoryHandle>;
    keys(): AsyncIterableIterator<string>;
    removeEntry(name: string, options?: { recursive?: boolean }): Promise<void>;
    resolve(possibleDescendant: FileSystemHandle): Promise<string[] | null>;
    values(): AsyncIterableIterator<
      FileSystemDirectoryHandle | FileSystemFileHandle
    >;

    [Symbol.asyncIterator]: FileSystemDirectoryHandle['entries'];
  }

  function showDirectoryPicker(): Promise<FileSystemDirectoryHandle>;
}
