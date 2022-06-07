import React from "react";
import { BrowserRouter } from "react-router-dom";

import AuthRoutes from "./AuthRoutes";
import DashboardRoutes from "./DashboardRoutes";

export default function Routes() {
  return (
    <BrowserRouter>
      <DashboardRoutes />
      <AuthRoutes />
    </BrowserRouter>
  )
}