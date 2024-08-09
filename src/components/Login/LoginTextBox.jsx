import React from 'react';
import "../../styles/pages/LoginPage.scss";

const LoginTextBox = () => {
    const strArray = ["KAGU는", "로그인 후", "이용이", "가능합니다."];
    return (
      <div className="Login--Text--Box">
        {strArray.map((str, index) => (
          <div key={index} className='Login--Text--Item'>{str}</div>
        ))}
      </div>
    );
};

export default LoginTextBox;