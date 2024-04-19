import React from "react";

const Button = ({ type, className, handleClick, children }) => {
  return (
    <button
      onClick={handleClick}
      className={`${className} ${
        type === "save"
          ? "bg-orange-300 border-black text-zinc-950"
          : "bg-white border-zinc-950 text-black"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
