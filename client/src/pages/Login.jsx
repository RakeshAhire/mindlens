import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (userId === "admin" && password === "admin123") {
      localStorage.setItem("admin", JSON.stringify({ userId, role: "admin" }));
      setTimeout(() => {
        navigate("/");
      }, 500);
    } else {
      alert("Wrong Credentials!");
    }
  };
  return (
    <div className="w-full h-full fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-30 transition-all ease duration-1500 ">
      <div className="w-2/5 h-auto flex flex-col items-center justify-center gap-3 border py-8 px-8 rounded-lg bg-white">
        <p className="text-xl text-start uppercase font-semibold">
          Enter Credentials
        </p>
        <input
          type="text"
          className="w-full border-b border-gray-500 py-2 px-2 outline-none"
          placeholder="User Id"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          className="w-full border-b border-gray-500 py-2 px-2 outline-none"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-gray-300 mt-8 py-2 px-4 rounded hover:bg-gray-400"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
