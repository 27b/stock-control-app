import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";

export default function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
      <UserRoutes />
      <AdminRoutes />
    </BrowserRouter>
  )
}