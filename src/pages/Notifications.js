import React, { useEffect, useState } from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fakeNotifications = [
      { id: 1, message: 'Cảnh báo: Nhiệt độ cao', time: '2025-03-07 10:00', status: 'UNREAD' },
      { id: 2, message: 'Độ ẩm ổn định', time: '2025-03-07 09:30', status: 'READ' },
    ];
    setNotifications(fakeNotifications);

    // API Thực Tế: Thay thế khi có backend
    /*
    const fetchNotifications = async () => {
      const res = await axios.get('http://your-api-endpoint/notifications');
      setNotifications(res.data);
    };
    fetchNotifications();
    */
  }, []);

  return (
    <div className="notifications">
      <h1>Thông Báo</h1>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id} className={notification.status === 'UNREAD' ? 'unread' : ''}>
            {notification.message} - {notification.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;