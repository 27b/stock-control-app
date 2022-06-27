import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from "../constants/paths"

const Login = lazy(() => import("../pages/Auth/login"));

export default function AuthRoutes() {
    return (
      <Routes>
         <Route exact="true" path={PATH.LOGIN} element={<Login />} />
      </Routes>
    )
  }