import { useEffect, useState } from 'react';

function useIsAuthenticatedHook() {
  const token = localStorage.getItem('dev_links');
  const [authentication, setAuthentication] = useState<boolean>(!!token);

  useEffect(() => {
    if (token) {
      setAuthentication(true);
    } else {
      setAuthentication(false);
    }
  }, [token]);

  return {
    authentication
  }
}

export default useIsAuthenticatedHook;