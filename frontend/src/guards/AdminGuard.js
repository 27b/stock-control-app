import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
import { authAdminUser } from "../services/AuthAPI";
import { PATH } from "../constants/paths";

const AdminGuard = () => {
    return authAdminUser() ? <Outlet /> : <Navigate to={ PATH.LOGIN } />;
}

export default AdminGuard;