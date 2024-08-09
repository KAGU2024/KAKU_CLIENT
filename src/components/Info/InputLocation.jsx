import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import "../../styles/pages/InfoPage.scss";

const Modal = ({ children, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  </div>
);

const InputLocation = (props) => {
  const { setPageNumber, location, setLocation } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleComplete = (data) => {
    setLocation(data.address)
    setIsModalOpen(false);
  };

  const handleSearchClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="Input--Wrapper">
      <div className="Input--Circle">1</div>
      <div className="Input--TextBox">
        <div>내가 사는 곳의</div>
        <div>
          <span style={{ color: "#046649", fontWeight: "700" }}>
            주소를 입력
          </span>{" "}
          해주세요!
        </div>
      </div>
      <div className="InputLocation--Input--Box">
        <input
          type="text"
          className="InputLocation--Input"
          value={location}
        />
        <button
          className="InputLocation--Input--Button"
          onClick={handleSearchClick}
        >
          검색
        </button>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}

      <div className="InputLocation--Location--TextBox">
        <div className="InputLocation--Location--TextBox--Title">입력예시</div>
        <div>도로명 예) 도산대로8길 23, 권광로373</div>
        <div>동주소 예) 연희동35-7</div>
        <div>건물명 예) 강남역 쉐르빌</div>
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

export default InputLocation;
