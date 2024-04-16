// Button.jsx

import React from "react";

const Button = (props) => {
  return (
    <a
      href=""
      onClick={props.onClick}
      className={`p-3 active:scale-90 shadow-lg rounded-full w-fit h-fit hover:text-depth-light hover:bg-dark duration-300 border-[0.01px]  border-depth-light font-medium tracking-tightest ${props.customClass}`}
    >
      {props.text}
    </a>
  );
};

export default Button;
