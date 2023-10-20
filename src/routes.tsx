import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import LoginLayout from './layouts/login-layout';
import RegisterLayout from './layouts/register-layout';

import useIsAuthenticatedHook from './hooks/is-authenticated-hook';

const PrivateRoute = () => {
    const { authentication } = useIsAuthenticatedHook();
    return authentication ? <Outlet /> : <Navigate to="/login" />;
}

function AllRoutes() {
    return (
        <Routes>
            <Route exact path='/' element={<PrivateRoute />}>
                <Route exact path='/' element={<>Hola</>} />
            </Route>
            <Route exact path='/register' element={<RegisterLayout />} />
            <Route exact path='/login' element={<LoginLayout />} />

        </Routes>
    );
}

export default AllRoutes;