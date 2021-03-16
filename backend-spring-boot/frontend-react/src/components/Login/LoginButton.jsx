import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.css";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (<div className="btn-text" onClick={() => loginWithRedirect()}>Login / Sign up</div>  
        )
        
    );
};

export default LoginButton;