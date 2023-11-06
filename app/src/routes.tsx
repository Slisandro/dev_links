import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import LoginLayout from './layouts/login-layout';
import RegisterLayout from './layouts/register-layout';

import useIsAuthenticatedHook from './hooks/is-authenticated-hook';
import EditLinksLayout from './layouts/edit-links-layout';
import EditPersonalDataLayout from './layouts/edit-personal-data-layout';
import PreviewLayout from './layouts/preview-layout';
import ProfilePublicLayout from './layouts/profile-public-layout';
import HomeLayout from './layouts/home-layout';

const PrivateRoute = () => {
    const { authentication } = useIsAuthenticatedHook();
    return authentication ? <Outlet /> : <Navigate to="/login" />;
}

function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomeLayout />} />
            <Route path='/' element={<PrivateRoute />}>
                <Route path='/home' element={<HomeLayout />} />
                <Route path='/links' element={<EditLinksLayout />} />
                <Route path='/profile' element={<EditPersonalDataLayout />} />
                <Route path='/preview' element={<PreviewLayout />} />
            </Route>
            <Route path='/register' element={<RegisterLayout />} />
            <Route path='/login' element={<LoginLayout />} />
            <Route path='/users/:id' element={<ProfilePublicLayout />} />
        </Routes>
    );
}

export default AllRoutes;