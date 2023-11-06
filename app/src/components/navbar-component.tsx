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
    const location = useLocation();
    const { name, lastname } = useSelector((state: { userProfile: UserProfileState }) => state.userProfile);

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
    const handleLogout = () => dispatch(logout())
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
                        <LinkIcon color="currentColor" />
                        Logout
                    </NavLink>
                </div>
            )}
        </div>
    )
}

export default NavBarComponent