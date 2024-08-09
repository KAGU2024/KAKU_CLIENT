import React, { useEffect } from 'react';
import '../styles/pages/MainPage.scss';
import Apis from '../apis/Apis';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Apis.get("/api/v1/member/new")
    .then((response) => {
      if(response.data.data.new) {
        navigate('/info');
      }
    })
  }, [])
  
    return (
      <div>
      </div>
    );
};

export default MainPage;