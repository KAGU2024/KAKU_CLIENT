import React, { useEffect, useState } from "react";
import "../styles/pages/LoginPage.scss";
import LoginSocialIcons from "../components/Login/LoginSocialIcons";
import LoginBottomTextBox from "../components/Login/LoginBottomTextBox";
import SplashPage from "./SplashPage";
import LoginTextBox from "../components/Login/LoginTextBox";

const LoginPage = () => {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    // Check if the splash screen has been shown before
    if (localStorage.getItem("isSplash") === "true") {
      setIsSplash(false);
    }
  }, []);

  const handleSplashFinish = () => {
    localStorage.setItem("isSplash", "true");
    setIsSplash(false);
  };

  return (
    <>
      {isSplash ? (
        <SplashPage onFinish={handleSplashFinish} />
      ) : (
        <div className="Login--Wrapper">
          <LoginTextBox />
          <LoginSocialIcons />
          <LoginBottomTextBox />
        </div>
      )}
    </>
  );
};

export default LoginPage;
