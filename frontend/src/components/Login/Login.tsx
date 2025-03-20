import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import config from "../../config.json";
import { jwtDecode } from 'jwt-decode';


export function Login() {

  useEffect(() => {
    const local_token = localStorage.getItem("token");

    setTimeout(() => {
      if(!local_token){
        const currentUrl = window.location.href;
        const ssoLoginUrl = `${config.SSO.login}?redirectUrl=${encodeURIComponent(currentUrl)}`;
        window.location.href = ssoLoginUrl; // 自動跳轉到 SSO 登入頁面
      }
    }, 10000);
   
  }, []); // `useEffect` 在組件載入時執行一次

  const token = localStorage.getItem("token");
  console.log(token?jwtDecode(token):"");
  return (
      <Box>
        ${token}
      </Box>
  );
}

export default Login;
