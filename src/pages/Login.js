import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import logo from '../assets/logo.png'; // Sử dụng logo của dự án

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Fake login logic
    if (!username || !password) {
      toast.error('Vui lòng nhập đầy đủ thông tin!', {
        duration: 3000,
        style: { background: '#ff4444', color: '#fff' },
      });
      return;
    }

    // Giả lập kiểm tra thông tin (có thể thay bằng API thực tế)
    if (username === 'user' && password === 'password123') {
      toast.success('Đăng nhập thành công!', {
        duration: 2000,
        style: { background: '#4CAF50', color: '#fff' },
      });
      // Lưu trạng thái đăng nhập (giả lập)
      localStorage.setItem('isAuthenticated', 'true');
      setTimeout(() => navigate('/'), 1000); // Chuyển hướng sau 1 giây
    } else {
      toast.error('Tên đăng nhập hoặc mật khẩu không chính xác!', {
        duration: 3000,
        style: { background: '#ff4444', color: '#fff' },
      });
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <img src={logo} alt="Yolo:Farm Logo" className="login-logo" />
          <h2 className="login-title">Đăng Nhập Yolo:Farm</h2>
          <div className="input-group">
            <div className="input-wrapper">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              <input
                type="text"
                placeholder="Tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
              />
            </div>
            <div className="input-wrapper">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
            </div>
          </div>
          <button onClick={handleLogin} className="login-button">
            Đăng Nhập
          </button>
          <div className="login-footer">
            <Link to="/forgot-password" className="forgot-password">
              Quên mật khẩu?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;