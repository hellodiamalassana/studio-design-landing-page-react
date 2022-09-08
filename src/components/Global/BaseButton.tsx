import React from "react";

function BaseButton({ children, className }) {
  return (
    <button
      className={`bg-primary text-white py-[20px] px-[40px] rounded-full whitespace-nowrap ${className}`}
    >
      {children}
    </button>
  );
}

export default BaseButton;
