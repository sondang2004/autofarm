import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PumpControlPage from './pages/PumpControlPage';
import History from './pages/History';
import AnomalyDetection from './pages/AnomalyDetection';
import FruitClassification from './pages/FruitClassification';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';
import GardenManagement from './pages/GardenManagement';
import './styles.css';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated') || sessionStorage.getItem('isAuthenticated');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Sidebar />
                <div className="main-content">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/pump-control" element={<PumpControlPage />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/anomaly" element={<AnomalyDetection />} />
                    <Route path="/fruit-classification" element={<FruitClassification />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/garden-management" element={<GardenManagement />} />
                  </Routes>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;