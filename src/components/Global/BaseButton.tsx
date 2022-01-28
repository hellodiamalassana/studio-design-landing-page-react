import React from "react";

function BaseButton(props) {
  return (
    <button className="bg-primary text-white py-[20px] px-[40px] rounded-full">
      {props.children}
    </button>
  );
}

export default BaseButton;
