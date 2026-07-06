import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Auth from "../pages/Auth";
import History from "../pages/History";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import Analysis from "../dashboard/Analysis";
import ProtectedRoutes from "../security/ProtectedRoutes";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public */}

      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Auth />} />


      {/* Protected */}

      <Route element={<ProtectedRoutes />}>

        <Route
          path="/dashboard"
          element={<DashboardLayout />}
        >

          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="analyze"
            element={<Analysis />}
          />

          <Route 
          path="history"
          element={<History />}
          />

        </Route>

      </Route>

    </Routes>
  );
};

export default AppRoutes;