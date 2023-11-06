import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { UserLogged } from '../redux/reducers/authentication';

function useIsAuthenticatedHook() {
  const { token } = useSelector((s: { userLogged: UserLogged }) => s.userLogged)
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