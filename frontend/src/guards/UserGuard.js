import { Outlet, Navigate } from "react-router-dom";
import { authUser } from "../services/AuthAPI";
import { PATH } from "../constants/paths";

const UserGuard = () => {
    return authUser() ? <Outlet /> : <Navigate to={PATH.LOGIN} />;
}

export default UserGuard;