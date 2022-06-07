import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from "../constants/paths"

const Login = lazy(() => import("../pages/Auth/Login"));

export default function AuthRoutes() {
    return (
      <Routes>
         <Route path={PATH.LOGIN} element={<Login />} />
      </Routes>
    )
  }