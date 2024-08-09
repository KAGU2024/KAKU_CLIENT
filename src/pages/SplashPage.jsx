import React from "react";
import "../styles/pages/SplashPage.scss";

const textBoxs = [
  {
    id: 1,
    text: "KAGU와 함께",
  },
  {
    id: 2,
    text: "다양한 가구를",
  },
  {
    id: 3,
    text: "쉽고 빠르게 대여하고,",
  },
  {
    id: 4,
    text: "당신이 라이프스타일을",
  },
  {
    id: 5,
    text: "더욱 풍요롭게",
  },
  {
    id: 6,
    text: "만들어 보세요.",
  },
];

const SplashPage = ({ onFinish }) => {
  return (
    <div className="Splash--Wrapper">
      <div className="Splash--TextBox">
        {textBoxs.map((box) => (
          <div
            key={box.id}
            className={
              box.id === 1 ? "Splash--Text--Bold Splash--Text" : "Splash--Text"
            }
          >
            {box.text}
          </div>
        ))}
      </div>
      <button className="Splash--Btn" onClick={onFinish}>
        둘러보기
      </button>
    </div>
  );
};

export default SplashPage;
