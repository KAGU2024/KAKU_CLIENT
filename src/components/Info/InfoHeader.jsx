import React from "react";
import "../../styles/pages/InfoPage.scss";

import BackIcon from "../../assets/info/backIcon.svg";
import { useNavigate } from "react-router-dom";

const InfoHeader = (props) => {
  const { seqeunce } = props;
  const navigate = useNavigate();

  return (
    <>
      <div className="InfoHeader--Wrapper">
        <img
          src={BackIcon}
          alt="back-icon"
          className="InfoHeader--BackIcon"
          onClick={() => navigate("/login")}
        />
        <div className="InfoHeader--Center--TextBox">
          <div className="InfoHeader--Center--Text">회원가입</div>
        </div>
      </div>
      <div className="InfoHeader--Seqeunce--Bar--Wrapper">
        <div
          className="InfoHeader--Seqeunce--Bar"
          style={seqeunce === 1 ? { backgroundColor: "#046649" } : {}}
        />
        <div
          className="InfoHeader--Seqeunce--Bar"
          style={seqeunce === 2 ? { backgroundColor: "#046649" } : {}}
        />
        <div
          className="InfoHeader--Seqeunce--Bar"
          style={seqeunce === 3 ? { backgroundColor: "#046649" } : {}}
        />
      </div>
    </>
  );
};

export default InfoHeader;
