import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from "../constants/paths"
import UserGuard from "../guards/UserGuard";
import AdminGuard from "../guards/AdminGuard";
import AdminIndex from '../pages/Admin';

const PointOfSaleIndex = lazy(() => import("../pages/PointOfSale/index"));

export default function DashboardRoutes() {
    return (
      <Routes>
        <Route element={<UserGuard />}>
         <Route exact="true" path={PATH.DASHBOARD} element={<PointOfSaleIndex />} />
        </Route>
        <Route element={<AdminGuard />}>
         <Route exact="true" path={PATH.ADMIN} element={<AdminIndex />} />
        </Route>
      </Routes>
    )
  }