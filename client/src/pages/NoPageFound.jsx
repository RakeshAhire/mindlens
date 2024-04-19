import React from "react";
import { Link } from "react-router-dom";

const NoPageFound = () => {
    console.log('NoPageFound: ');
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <img src="/404_image.svg" alt="Page Not Found" className="w-80 h-auto" />
      <Link to ="/" className="text-blue-500 mt-8 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NoPageFound;
