import React, { useState } from 'react';
import './LoginSignup.css';

const AuthForm = ({ isLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({
    fullName: '',
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleTogglePassword = () => setShowPassword(!showPassword);
  const handleToggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateUsername = (username) => /^[a-zA-Z0-9!@#$%^&*()_+=-]+$/.test(username);
  const validateName = (name) => /^[a-zA-Z0-9]+$/.test(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = { ...errors };

    // Reset errors
    Object.keys(validationErrors).forEach(key => validationErrors[key] = '');

    // Validate form
    if (isLogin) {
      if (username === '' || password === '') {
        validationErrors.username = 'Email hoặc tên đăng nhập không được để trống';
        validationErrors.password = 'Mật khẩu không được để trống';
      } else if (validateEmail(username)) {
        if (!validateEmail(username)) {
          validationErrors.username = 'Email không hợp lệ!';
        }
      } else if (username.length < 1) {
        validationErrors.username = 'Tên đăng nhập không hợp lệ!';
      }
      if (password.length < 6) {
        validationErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự!';
      }
      if (Object.values(validationErrors).some(error => error !== '')) {
        setErrors(validationErrors);
        return;
      }
      // Log in
      console.log('Đăng nhập thành công với:', { username, password });
      alert('Đăng nhập thành công');

    } else {
      if (fullName === '' || name === '' || username === '' || email === '' || password === '' || confirmPassword === '') {
        validationErrors.fullName = 'Họ và tên đệm không được để trống';
        validationErrors.name = 'Tên không được để trống';
        validationErrors.username = 'Tên đăng nhập không được để trống';
        validationErrors.email = 'Email không được để trống';
        validationErrors.password = 'Mật khẩu không được để trống';
        validationErrors.confirmPassword = 'Nhập lại mật khẩu không được để trống';
      } else if (!validateName(fullName)) {
        validationErrors.fullName = 'Họ và tên đệm không hợp lệ';
      } else if (!validateName(name)) {
        validationErrors.name = 'Tên không hợp lệ';
      } else if (!validateUsername(username)) {
        validationErrors.username = 'Tên đăng nhập không hợp lệ';
      } else if (!validateEmail(email)) {
        validationErrors.email = 'Email không hợp lệ!';
      } else if (password.length < 6) {
        validationErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
      } else if (password !== confirmPassword) {
        validationErrors.confirmPassword = 'Mật khẩu không khớp';
      }
      if (Object.values(validationErrors).some(error => error !== '')) {
        setErrors(validationErrors);
        return;
      }
      
      console.log('Đăng ký thành công với:', { fullName, name, username, email, password });
      alert('Đăng ký thành công');
    }
    
    if (Object.keys(validationErrors).length === 0) {
      alert('Form Submitted successfully');
    }
  };

  return (
    <div className="auth-container">
      <div className="image-side" />
      <div className="form-side">
        <img src="https://i.imgur.com/1R5vdmS.png" alt="Logo" className="logo" />
        <h2>{isLogin ? 'Đăng nhập' : 'Đăng ký'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="name-container">
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Họ và tên đệm"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                {errors.fullName && <p className="error-text">{errors.fullName}</p>}
              </div>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Tên"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>
            </div>
          )}
          <div className="input-container">
            <input
              type="text"
              placeholder={isLogin ? "Email hoặc tên đăng nhập" : "Tên đăng nhập"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <p className="error-text">{errors.username}</p>}
          </div>
          {!isLogin && (
            <div className="input-container">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
          )}
          <div className="input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={showPassword ? "https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-line-1/32/-_Eye-Show-View-Watch-See-512.png" : "https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-line-1/32/-_Eye-Show-View-Watch-See-Disable-Inactive-Unavailable-Off-512.png"}
              alt="Toggle Password Visibility"
              className="eye-icon"
              onClick={handleTogglePassword}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>
          {isLogin && (
            <p className="forgot-password" style={{ textAlign: 'right' }} >
              <a href="/forgot-password">Quên mật khẩu?</a>
            </p>
          )}
          {!isLogin && (
            <div className="input-container">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Nhập lại mật khẩu"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <img
                src={showConfirmPassword ? "https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-line-1/32/-_Eye-Show-View-Watch-See-512.png" : "https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-line-1/32/-_Eye-Show-View-Watch-See-Disable-Inactive-Unavailable-Off-512.png"}
                alt="Toggle Confirm Password Visibility"
                className="eye-icon"
                onClick={handleToggleConfirmPassword}
              />
              {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
            </div>
          )}
          <p className="terms">
            Bằng việc tiếp tục, bạn đồng ý với <a href="/terms">Điều khoản</a>, <a href="/privacy-policy">Chính sách bảo mật</a> và <a href="/cookie-policy">Chính sách cookie</a> của chúng tôi.
          </p>
          <button type="submit" className="submit-btn">
            {isLogin ? 'Đăng nhập' : 'Đăng ký'}
          </button>
        </form>
        <div className="google-login">
          <p>Hoặc tiếp tục bằng</p>
          <div className="google-icon-container">
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png"
              alt="Google Login"
              className="google-icon"
            />
          </div>
        </div>
        <p className="redirect">
          {isLogin ? 'Lần đầu tiên bạn đến với Trip Wanderer?' : 'Bạn đã có tài khoản?'}{' '}
          <a href={isLogin ? '/signup' : '/login'}>
            {isLogin ? 'Đăng ký' : 'Đăng nhập'}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
