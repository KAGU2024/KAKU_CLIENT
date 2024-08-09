import React from "react";
import "../../styles/pages/InfoPage.scss";

const StyleArr = [
  "모던",
  "앤틱",
  "내추럴",
  "빈티지",
  "아담",
  "에스닉",
  "프렌치",
  "파스텔",
  "북유럽",
  "기타",
];

const InputStyle = (props) => {
  const { setPageNumber, styles, setStyles } = props;

  const handleStyleClick = (style) => {
    if (styles.includes(style)) {
      setStyles(styles.filter((item) => item !== style)); // 이미 선택된 스타일을 제거
    } else {
      setStyles([...styles, style]); // 선택된 스타일을 추가
    }
  };

  return (
    <div className="Input--Wrapper">
      <div className="Input--Circle">2</div>
      <div className="Input--TextBox">
        <div>
          관심있는{" "}
          <span style={{ color: "#046649", fontWeight: "700" }}>인테리어</span>
        </div>
        <div>
          <span style={{ color: "#046649", fontWeight: "700" }}>스타일</span>을
          선택해주세요!
        </div>
      </div>
      <div className="InputStyle--StyleBox--Collection">
        {StyleArr.map((style, index) => (
          <div
            key={index}
            className="InputStyle--StyleBox"
            onClick={() => handleStyleClick(style)}
            style={{
              borderColor: styles.includes(style) ? "#046649" : "",
              color: styles.includes(style) ? "#046649" : "black",
              cursor: "pointer",
            }}
          >
            {style}
          </div>
        ))}
      </div>
      <button
        className="InputLocation--Button"
        onClick={() => setPageNumber((prev) => prev + 1)}
      >
        다음
      </button>
    </div>
  );
};

export default InputStyle;
