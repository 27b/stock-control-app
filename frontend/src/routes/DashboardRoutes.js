import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from "../constants/paths"

const PointOfSaleIndex = lazy(() => import("../pages/PointOfSale/index"));

export default function DashboardRoutes() {
    return (
      <Routes>
         <Route path={PATH.DASHBOARD} element={<PointOfSaleIndex />} />
      </Routes>
    )
  }