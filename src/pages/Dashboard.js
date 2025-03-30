import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Dashboard() {
  const [soilMoisture, setSoilMoisture] = useState(0); // Giả lập độ ẩm đất
  const [pumps, setPumps] = useState([
    { id: 1, name: 'Máy bơm 1', status: false },
    { id: 2, name: 'Máy bơm 2', status: false },
  ]);

  const handleTogglePump = (id) => {
    setPumps(pumps.map(pump =>
      pump.id === id ? { ...pump, status: !pump.status } : pump
    ));
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Bảng điều khiển Yolo:Farm</h1>
        <div className="user-info">
          <span>Username: YoloFarm_2907</span>
        </div>
      </div>

      <div className="sensor-grid">
        <div className="sensor-card temperature">
          <h3>Nhiệt độ</h3>
          <p>0.0°C</p>
        </div>
        <div className="sensor-card humidity">
          <h3>Độ ẩm</h3>
          <p>0%</p>
        </div>
        <div className="sensor-card status">
          <h3>Tình trạng</h3>
          <p>0</p>
        </div>
        <div className="sensor-card gdd">
          <h3>GDD</h3>
          <p>0</p>
        </div>
        <div className="sensor-card soil-moisture">
          <h3>Độ ẩm đất</h3>
          <div className="gauge-wrapper">
            <CircularProgressbar
              value={soilMoisture}
              text={`${soilMoisture}%`}
              styles={buildStyles({
                pathColor: soilMoisture < 30 ? '#ff4444' : soilMoisture < 70 ? '#ffeb3b' : '#4CAF50',
                textColor: '#333',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="history-section">
          <h3>Lịch sử ánh sáng</h3>
          <div className="history-list">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="history-item"></div>
            ))}
          </div>
        </div>
        <div className="history-section">
          <h3>Lịch sử độ ẩm đất</h3>
          <div className="history-list">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="history-item"></div>
            ))}
          </div>
        </div>
        <div className="pump-control-section">
          {pumps.map(pump => (
            <div key={pump.id} className="pump-control">
              <h3>{pump.name}</h3>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={pump.status}
                  onChange={() => handleTogglePump(pump.id)}
                />
                <span className="slider round"></span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;