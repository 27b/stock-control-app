import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from "../constants/paths"
import AdminGuard from "../guards/AdminGuard";
import { 
  DashboardView,
  CategoryListView,
  CategoryDetailView,
  ItemListView,
  ItemAddView,
  ItemDetailView
} from '../pages/Admin';

export default function AuthRoutes() {
    return (
      <Routes>
        <Route element={<AdminGuard />}>
         <Route path={PATH.ADMIN.INDEX} element={<DashboardView />} />
         <Route path={PATH.ADMIN.CATEGORY} element={<CategoryListView />} />
         <Route path={PATH.ADMIN.CATEGORY + '/:id'} element={<CategoryDetailView />} />
         <Route path={PATH.ADMIN.ITEM} element={<ItemListView />} />
         <Route path={PATH.ADMIN.ITEM + '/add'} element={<ItemAddView />} />
         <Route path={PATH.ADMIN.ITEM + '/:id'} element={<ItemDetailView />} />
        </Route>
      </Routes>
    )
  }