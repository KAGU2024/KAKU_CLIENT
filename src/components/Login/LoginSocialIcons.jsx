import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apple from "../../assets/login/apple.svg";
import kakao from "../../assets/login/kakao.svg";
import naver from "../../assets/login/naver.svg";
import google from "../../assets/login/google.svg";
import "../../styles/pages/LoginPage.scss";
import Apis from '../../apis/Apis';

const LoginOptions = [
  {
    name: "kakao",
    svg: kakao,
    authUrl: process.env.REACT_APP_KAKAO_LOGIN_URL,
  },
  {
    name: "naver",
    svg: naver,
    authUrl: process.env.REACT_APP_NAVER_LOGIN_URL,
  },
  {
    name: "google",
    svg: google,
    authUrl: process.env.REACT_APP_GOOGLE_LOGIN_URL
  },
  {
    name: "apple",
    svg: apple,
  },
];

const LoginSocialIcons = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleSocialLogin = async () => {
        const params = new URL(document.URL).searchParams;
        const code = params.get("code");
        const state = params.get("state");
        const socialType = sessionStorage.getItem("socialType");

        if (code && socialType) {
            const response = await Apis.post(`/api/v1/auth/${socialType}`, {
                authorizationCode: code,
                state: state || undefined,
            });
            sessionStorage.setItem(
                "accessToken",
                response.data.data.accessToken
            );
            sessionStorage.setItem(
                "refreshToken",
                response.data.data.refreshToken
            );
            navigate('/');
        }
        };
        handleSocialLogin();
    }, [navigate]);

    const handleLogin = (socialType, authUrl) => {
        sessionStorage.setItem("socialType", socialType);
        window.location.href = authUrl
    };

    return (
      <div className="Login--Social--Icons">
        {LoginOptions.map((option) => (
          <img
            key={option.name}
            src={option.svg}
            alt={option.name}
            onClick={() => handleLogin(option.name, option.authUrl)}
          />
        ))}
      </div>
    );
};

export default LoginSocialIcons;