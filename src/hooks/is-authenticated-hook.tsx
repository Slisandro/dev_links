import { useState } from 'react'

function useIsAuthenticatedHook() {
    const [authentication, setAuthentication] = useState<boolean>(true);

    return {
        authentication
    }
}

export default useIsAuthenticatedHook;