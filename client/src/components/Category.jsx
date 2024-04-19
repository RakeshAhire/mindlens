import React from "react";

const Category = ({ title, children }) => {
  return (
    <div className="w-full text-lg font-semibold text-black max-md:max-w-full md:text-2xl mb-4">
      {title} {children}
    </div>
  );
};
export default Category;;
