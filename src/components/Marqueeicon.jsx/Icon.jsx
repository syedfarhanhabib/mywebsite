import React from "react";

function Icon(props) {
  return (
    <div className="w-8">
      <img className="invert w-full" src={props.img} alt="" />
    </div>
  );
}

export default Icon;
