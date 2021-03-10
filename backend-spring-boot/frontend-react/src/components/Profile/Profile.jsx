import React, { Component } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import TodoList from '../TodoList/TodoList';


const Profile = () => {
    const { user, isAuthenticated } = useAuth0();   
        return (
            <>
                {isAuthenticated && (
                    <TodoList user={user}/>
                )}
            </>
        );
};

export default Profile;

