import React from 'react';
import LoginButton from '../Login/LoginButton';
import LogoutButton from '../Logout/LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";

const Navbar = () => {
    const {  isAuthenticated } = useAuth0();
    return (
        <>
            {isAuthenticated && (<div className="icon-cont"><i data-target="modal-create" className="modal-trigger far fa-sticky-note fa-1x new-note-icon"></i></div>)} 
            <div className="navbar">
                    <h1 className="nav-title" >Todo note board</h1>
                    
                    
                    
                    <div className="nav-btn-cont">
                        <div className="logout-cont">
                            <LoginButton/>
                        </div>
                        <div className="login-cont">
                            <LogoutButton/>
                        </div>
                    </div>  
            </div>
        </>
        
    );
};

export default Navbar;