import React, { useState } from 'react';
import "../../styles/pages/LoginPage.scss";

const LoginFormBox = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = (email, password) => {
    console.log(email, password)
  }

    return (
      <div className="Login--Formbox">
        <input
          className="Login--Formbox--Input"
          placeholder="이메일"
          type="email"
          onChange={(e) => {setEmail(e.target.value)}}
        />
        <input
          className="Login--Formbox--Input"
          placeholder="비밀번호"
          type="password"
          onChange={(e) => {setPassword(e.target.value)}}
        />
        <div className="Login--Formbox--Btn" onClick={() => handleLogin(email, password)}>
          로그인
        </div>
      </div>
    );
};

export default LoginFormBox;