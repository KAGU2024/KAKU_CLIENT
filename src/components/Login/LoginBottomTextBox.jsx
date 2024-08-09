import React from 'react';
import "../../styles/pages/LoginPage.scss";

const LoginBottomTextBox = () => {
    return (
      <div className="Login--Social--Bottoms">
        <div>
          회원가입 없이 소셜 계정을 통해 바로 이용 가능하며 첫 로그인 시
        </div>
        <div>
          <span style={{ color: "#68A392" }}>이용약관 </span>및
          <span style={{ color: "#68A392" }}> 개인정보처리방침 </span>
          동의로 간주됩니다.
        </div>
      </div>
    );
};

export default LoginBottomTextBox;