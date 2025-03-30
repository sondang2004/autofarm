import React, { useState } from 'react';
import PumpControl from '../components/PumpControl';

function PumpControlPage() {
  const [pumps, setPumps] = useState([
    { id: 1, name: 'Máy bơm 1', status: 'Tắt' },
    { id: 2, name: 'Máy bơm 2', status: 'Tắt' },
  ]);

  const handleTogglePump = (id) => {
    setPumps(pumps.map(pump =>
      pump.id === id ? { ...pump, status: pump.status === 'Tắt' ? 'Bật' : 'Tắt' } : pump
    ));
  };

  return (
    <div className="pump-control-page">
      <h1>Điều Khiển Máy Bơm</h1>
      <div className="pump-grid">
        {pumps.map(pump => (
          <PumpControl
            key={pump.id}
            name={pump.name}
            status={pump.status}
            onToggle={() => handleTogglePump(pump.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default PumpControlPage;