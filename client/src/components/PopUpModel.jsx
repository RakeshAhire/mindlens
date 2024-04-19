import React from "react";

const PopUpModal = ({ children }) => {
  return (
    <div className="w-full h-full fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-30 transition-all ease duration-1500 ">
      {children}
    </div>
  );
};

export default PopUpModal;
