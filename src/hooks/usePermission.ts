import { useEffect, useState } from 'react';

const usePermission = function usePermission(name: PermissionName) {
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>();
  const [isGranted, setIsGranted] = useState(false);

  useEffect(() => {
    const getPermission = async () => {
      setPermissionStatus(await navigator.permissions.query({ name }));
    };

    getPermission();
  }, [name]);

  useEffect(() => {
    const onChange = () => setIsGranted(permissionStatus?.state === 'granted');

    setIsGranted(permissionStatus?.state === 'granted');

    permissionStatus?.addEventListener('change', onChange);

    return () => permissionStatus?.removeEventListener('change', onChange);
  }, [permissionStatus]);

  return isGranted;
};

export default usePermission;
