import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useIsAuthenticatedHook from '../hooks/is-authenticated-hook';
import ButtonComponent from './button-component';
import DevLinksIcon from '../icons/dev-links-icon';
import LinkIcon from '../icons/link-icon';
import ProfileIcon from '../icons/profile-icon';
import BarsIcon from '../icons/bars-icon';
import XMarkIcon from '../icons/x-mark-icon';
import { useSelector } from 'react-redux';
import { UserProfileState } from '../redux/reducers/user-profile-reducers';
import { logout } from '../redux/reducers/authentication';
import { useDispatch } from 'react-redux';

function NavBarComponent() {
    const { authentication } = useIsAuthenticatedHook();
    return (
        <nav className="navbar">
            <div className="logo">
                {authentication && <Bars />}
                <DevLinksIcon />
            </div>

            {authentication ? <NavBarAuthentication /> : <NavBarNotAuthenticated />}
        </nav>
    )
};

const NavBarAuthentication = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { name, lastname } = useSelector((state: { userProfile: UserProfileState }) => state.userProfile);

    const handleLogout = () => {
        dispatch(logout());
        window.location.href = "/login";
    };

    return (
        <>
            <div className="actions">
                <NavLink to="/links" style={{ textDecoration: "none" }}>
                    <ButtonComponent
                        className={location.pathname === "/links" ? "selected" : ""}
                        label="Links"
                        icon={<LinkIcon color={"currentColor"} />}
                        disabled={false}
                        type={'outline'}
                    />
                </NavLink>

                <NavLink to="/profile" style={{ textDecoration: "none" }}>
                    <ButtonComponent
                        label="Profile Details"
                        className={location.pathname === "/profile" ? "selected" : ""}
                        icon={<ProfileIcon />}
                        disabled={false}
                        type={'outline'}
                    />
                </NavLink>
            </div>
            <div className="preview">
                <NavLink to="/preview" style={{ textDecoration: "none" }}>
                    <ButtonComponent type="outline" label="Preview" disabled={!name || !lastname} />
                </NavLink>
                <button className="logout" style={{ padding: 5, border: "none", backgroundColor: "transparent" }} onClick={handleLogout}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" color="#737373" />
                    </svg>
                </button>
            </div>
        </>
    )
};

const NavBarNotAuthenticated = () => {
    return (
        <div className="preview">
            <NavLink to="/login">
                <ButtonComponent buttonType="submit" type="outline" label="Login" disabled={false} />
            </NavLink>
        </div>
    )
}

const Bars = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleClick = () => setOpen(!open);
    const handleLogout = () => {
        dispatch(logout())
        window.location.href = "/login";
    }

    return (
        <div className="container-bars">
            <button onClick={handleClick}>
                {!open ? <BarsIcon /> : <XMarkIcon />}
            </button>
            {open && (
                <div className="dropdown">
                    <NavLink to="/links" className="option">
                        <LinkIcon color="currentColor" />
                        Links
                    </NavLink>
                    <NavLink to="/profile" className="option">
                        <ProfileIcon />
                        Profile
                    </NavLink>
                    <NavLink to="/" className="option" onClick={handleLogout}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>

                        Logout
                    </NavLink>
                </div>
            )}
        </div>
    )
}

export default NavBarComponent