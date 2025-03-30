import React, { useState } from 'react';
import DeviceList from '../components/DeviceList';

function Settings() {
  const [devices, setDevices] = useState([
    { id: 1, name: 'Cảm biến nhiệt độ', type: 'sensor', status: 'Hoạt động' },
    { id: 2, name: 'Máy bơm 1', type: 'actuator', status: 'Tắt' },
  ]);

  const handleAddDevice = () => {
    const newDevice = { id: devices.length + 1, name: `Thiết bị ${devices.length + 1}`, type: 'sensor', status: 'Tắt' };
    setDevices([...devices, newDevice]);
  };

  const handleDeleteDevice = (id) => {
    setDevices(devices.filter(device => device.id !== id));
  };

  return (
    <div className="settings">
      <h1>Quản Lý Thiết Bị</h1>
      <button onClick={handleAddDevice}>Thêm Thiết Bị</button>
      <DeviceList devices={devices} onDelete={handleDeleteDevice} />
    </div>
  );
}

export default Settings;