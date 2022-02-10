import { useEffect, useState } from 'react';

const usePermission = function usePermission(name: PermissionName) {
  const [permission, setPermission] = useState(false);

  useEffect(() => {
    const getPermission = async () => {
      const permissionStatus = await navigator.permissions.query({ name });

      setPermission(permissionStatus.state === 'granted');

      permissionStatus.addEventListener('change', function onChange() {
        setPermission(this.state === 'granted');
      });
    };

    getPermission();
  }, [name]);

  return permission;
};

export default usePermission;
