import React from 'react';
import { Navigate } from "react-router-dom";
import { logoutUser } from '../../services/AuthAPI';

const Logout = () => {
    logoutUser();

    return <Navigate to="/" />
}

export default Logout;