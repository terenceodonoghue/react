import { useEffect, useRef, useState } from 'react';

const usePermission = function usePermission(name: PermissionName) {
  const permissionStatus = useRef<PermissionStatus>();
  const [isGranted, setGranted] = useState(false);

  useEffect(() => {
    const onChange = () =>
      setGranted(permissionStatus.current?.state === 'granted');

    const getPermission = async () => {
      permissionStatus.current = await navigator.permissions.query({ name });

      setGranted(permissionStatus.current.state === 'granted');

      permissionStatus.current.addEventListener('change', onChange);
    };

    getPermission();

    return () =>
      permissionStatus.current?.removeEventListener('change', onChange);
  }, [name]);

  return isGranted;
};

export default usePermission;
