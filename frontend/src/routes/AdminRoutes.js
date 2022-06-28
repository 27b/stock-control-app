import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from "../constants/paths"
import AdminGuard from "../guards/AdminGuard";
import { AdminCategories, AdminCategoryItem, AdminDashboard, AdminItems, AdminItemDetail } from '../pages/Admin';

export default function AuthRoutes() {
    return (
      <Routes>
        <Route element={<AdminGuard />}>
         <Route path={PATH.ADMIN.INDEX} element={<AdminDashboard />} />
         <Route path={PATH.ADMIN.CATEGORY} element={<AdminCategories />} />
         <Route path={PATH.ADMIN.CATEGORY + '/:id'} element={<AdminCategoryItem />} />
         <Route path={PATH.ADMIN.ITEM} element={<AdminItems />} />
         <Route path={PATH.ADMIN.ITEM + '/:id'} element={<AdminItemDetail />} />

        </Route>
      </Routes>
    )
  }