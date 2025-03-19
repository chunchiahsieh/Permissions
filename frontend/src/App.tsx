
import {Home} from './components/Home/index';
import {Login} from './components/Login/index';
import {ClearToken} from './components/ClearToken/index';
import {  Route, Routes,Navigate ,useNavigate  } from 'react-router-dom';
import React, { useEffect } from 'react';

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
      console.log("Home");
     navigate("/Home");
    }
    console.log("login");
    navigate("/");
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