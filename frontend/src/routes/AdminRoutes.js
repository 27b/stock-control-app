import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from "../constants/paths"
import AdminGuard from "../guards/AdminGuard";
import { AdminCategories, AdminDashboard, AdminItems } from '../pages/Admin';

export default function AuthRoutes() {
    return (
      <Routes>
        <Route element={<AdminGuard />}>
         <Route path={PATH.ADMIN.INDEX} element={<AdminDashboard />} />
         <Route path={PATH.ADMIN.CATEGORY} element={<AdminCategories />} />
         <Route path={PATH.ADMIN.ITEM} element={<AdminItems />} />
        </Route>
      </Routes>
    )
  }