import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

function useIsAuthenticatedHook() {
    // @ts-expect-error
    const { token } = useSelector(s => s.userLoggedReducers)
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