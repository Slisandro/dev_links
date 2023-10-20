import { useState } from 'react'

function useIsAuthenticatedHook() {
    const [authentication, setAuthentication] = useState<boolean>(false);

    return {
        authentication
    }
}

export default useIsAuthenticatedHook;