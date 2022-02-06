import { useEffect, useState } from 'react';

const usePermission = function usePermission(name: PermissionName) {
  const [permission, setPermission] = useState(false);

  useEffect(() => {
    const getPermission = async () => {
      const permissionStatus = await navigator.permissions.query({ name });

      setPermission(permissionStatus.state === 'granted');
      permissionStatus.onchange = function () {
        setPermission(this.state === 'granted');
      };
    };

    getPermission();
  }, []);

  return permission;
};

export default usePermission;
