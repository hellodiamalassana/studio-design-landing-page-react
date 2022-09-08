import React, { ReactChildren } from "react";

function BaseButton({
  children,
  className,
}: {
  children: ReactChildren | JSX.Element | string;
  className?: string;
}) {
  return (
    <button
      className={`bg-primary text-white py-[20px] px-[40px] rounded-full whitespace-nowrap ${className}`}
    >
      {children}
    </button>
  );
}

export default BaseButton;
