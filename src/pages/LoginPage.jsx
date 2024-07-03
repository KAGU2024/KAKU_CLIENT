import React from 'react';
import '../styles/pages/LoginPage.scss';
import LoginTextBox from '../components/Login/LoginTextBox';
import LoginFormBox from '../components/Login/LoginFormBox';
import LoginHrBox from '../components/Login/LoginHrBox';
import LoginSocialIcons from '../components/Login/LoginSocialIcons';
import LoginBottomTextBox from '../components/Login/LoginBottomTextBox';



const LoginPage = () => {
    
    return (
      <div className="Login--Wrapper">
        <LoginTextBox />
        <LoginFormBox />
        <LoginHrBox />
        <LoginSocialIcons />
        <LoginBottomTextBox />
      </div>
    );
};

export default LoginPage;