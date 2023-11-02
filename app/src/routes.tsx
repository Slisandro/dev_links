import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import LoginLayout from './layouts/login-layout';
import RegisterLayout from './layouts/register-layout';

import useIsAuthenticatedHook from './hooks/is-authenticated-hook';
import EditLinksLayout from './layouts/edit-links-layout';
import EditPersonalDataLayout from './layouts/edit-personal-data-layout';
import PreviewLayout from './layouts/preview-layout';

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
                <Route path='/home'
                    element={<EditLinksLayout />}
                />
                <Route path='/links' element={<EditLinksLayout />} />
                <Route path='/profile' element={<EditPersonalDataLayout />} />
<<<<<<< HEAD
                <Route path='/preview' element={<PreviewLayout />} />
=======
>>>>>>> 95fd6025c0a1ccc090bda12e2711c161af32e660
            </Route>
            <Route path='/register' element={<RegisterLayout />} />
            <Route path='/login' element={<LoginLayout />} />
        </Routes>
    );
}

export default AllRoutes;