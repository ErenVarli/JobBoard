import React from 'react';
import { Link } from 'react-router-dom';
//import '../../style/App.css';

const NavbarAdmin: React.FC = () => {
    return (
        <nav className="navbarAdmin">
            <div className="logo">
                Admin Panel
            </div>
            <ul className="menu">
                <li className="menu-item">
                    <Link to="/postsadmin" className="link">Advertisements</Link>
                </li>
                <li className="menu-item">
                    <Link to="/companies" className="link">Companies</Link>
                </li>
                <li className="menu-item">
                    <Link to="/users" className="link">Users</Link>
                </li>
                <li className="menu-item">
                    <Link to="/login" className="link">Logout</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavbarAdmin;
