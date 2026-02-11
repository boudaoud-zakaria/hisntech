import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./components/dashboard/Dashboard";
import { IncidentsPage } from "./components/dashboard/IncidentsPage";
import { AlertsPage } from "./components/dashboard/AlertsPage";
import { MainLayout } from "./components/layout/MainLayout";
import { HomePage } from "./components/home/HomePage";
import { LoginPage } from "./components/auth/LoginPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard Routes wrapped in MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/monitoring" element={<Dashboard />} />
          <Route path="/incidents" element={<IncidentsPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

