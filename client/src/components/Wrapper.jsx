import React from "react";
import { Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Wrapper = ({ children }) => {
  const isAdmin = JSON.parse(localStorage.getItem("admin")) || "";
  
  if (isAdmin.role !== "admin") {
    return <Navigate to="/login" />;
  }
  return (
    <div className="w-full flex justify-between relative">
      <div className="w-[10%] md:w-[7%] bg-white h-screen sticky top-2">
        <Sidebar />
      </div>
      <div className="w-[90%] px-6">{children}</div>
    </div>
  );
};

export default Wrapper;
