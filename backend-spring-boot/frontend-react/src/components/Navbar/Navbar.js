import React from 'react';
import LoginButton from '../Login/LoginButton';
import LogoutButton from '../Logout/LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";

const Navbar = () => {
    const {  isAuthenticated } = useAuth0();
    return (
        <div className="navbar">
            <h1 className="nav-title" >Todo note board</h1>
            {isAuthenticated && (<div className="icon-cont">
                <i data-target="modal-create" className="modal-trigger far fa-sticky-note fa-1x"></i>
            </div>)}
            
            
            

            <LogoutButton/>
            <LoginButton/>
           
            
        </div>
    );
};

export default Navbar;