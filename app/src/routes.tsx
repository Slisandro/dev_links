import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import LoginLayout from './layouts/login-layout';
import RegisterLayout from './layouts/register-layout';

import useIsAuthenticatedHook from './hooks/is-authenticated-hook';
import EditLinksLayout from './layouts/edit-links-layout';
import EditPersonalDataLayout from './layouts/edit-personal-data-layout';

const PrivateRoute = () => {
    const { authentication } = useIsAuthenticatedHook();
    return authentication ? <Outlet /> : <Navigate to="/login" />;
}

function AllRoutes() {
    return (
        <Routes>
            <Route path='/'
                element={<EditLinksLayout />}
            />
            <Route path='/' element={<PrivateRoute />}>
                <Route path='/edit/links' element={<EditLinksLayout />} />
                <Route path='/edit/profile' element={<EditPersonalDataLayout />} />
            </Route>
            <Route path='/register' element={<RegisterLayout />} />
            <Route path='/login' element={<LoginLayout />} />
        </Routes>
    );
}

export default AllRoutes;