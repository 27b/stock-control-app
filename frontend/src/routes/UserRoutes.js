import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from "../constants/paths"
import UserGuard from "../guards/UserGuard";

const PointOfSaleView = lazy(() => import("../pages/PointOfSale/dashboard"));

export default function DashboardRoutes() {
    return (
      <Routes>
        <Route element={<UserGuard />}>
         <Route exact="true" path={PATH.USER.INDEX} element={<PointOfSaleView />} />
        </Route>
      </Routes>
    )
}