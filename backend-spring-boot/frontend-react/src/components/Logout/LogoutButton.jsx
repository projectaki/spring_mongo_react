import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import "./LogoutButton.css";

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div className="btn-cont">
                <span onClick={() => logout()}>Logout</span>
            </div>
        )
        
    );
};

export default LogoutButton;