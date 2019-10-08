import React from "react";

const NumberButton = (props) => {
  return (
    <div>
      <button className="btn number-btn" onClick={() => props.numberClick(props.mappedNumbs)}>{props.mappedNumbs}</button>
    </div>
  );
};

export default NumberButton;