
import {Home} from './components/Home/index';
import {Login} from './components/Login/index';
import {ClearToken} from './components/ClearToken/index';
import { Route, Routes, useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';
import config from "../src/config.json";

function App() {
  const navigate = useNavigate();

  useEffect(() => {

    const local_token = localStorage.getItem("token");
    console.log("local_token"+local_token);
    if(local_token) return;

    const token = new URLSearchParams(location.search).get("token") || null;
    console.log("token"+token);
    if(token){
      localStorage.setItem('token', token);
       // 等待一點時間再跳轉（可以利用 setTimeout 等待一個短暫的時間）
      setTimeout(() => {
        console.log("Redirecting to Home");
        navigate("/Home");
      }, 10000);
    }

    setTimeout(() => {
      console.log("login");
      const currentUrl = window.location.href;
      const ssoLoginUrl = `${config.SSO.login}?redirectUrl=${encodeURIComponent(currentUrl)}`;
      window.location.href = ssoLoginUrl; // 自動跳轉到 SSO 登入頁面
    }, 10000);
    
  }, []);

  return (
      <Routes>
        {/* 配置 Login 页面 */}
        <Route path="/" element={<Login />} />
        {/* 配置 Home 页面 */}
        <Route path="/Home" element={<Home />} />
        <Route path="/ClearToken" element={<ClearToken />} />
      </Routes>
  );
}

export default App;