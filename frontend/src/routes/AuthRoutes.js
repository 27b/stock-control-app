import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from "../constants/paths"

const Login = lazy(() => import("../pages/Auth/login"));
const Logout = lazy(() => import("../pages/Auth/logout"));

export default function AuthRoutes() {
    return (
      <Routes>
         <Route exact="true" path={PATH.LOGIN} element={<Login />} />
         <Route exact="true" path={PATH.LOGOUT} element={<Logout />} />
      </Routes>
    )
  }