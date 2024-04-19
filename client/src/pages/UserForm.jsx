import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Form } from "../components/Form";

const UserForm = () => {
  const [formData, setFormData] = useState();
  const [userName, setUserName] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getFormDetails = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_API}/forms/getsingle/${id}`
          // `${process.env.REACT_APP_BACKEND_API}/forms/getsingle/6620c85389f09eb5c59e7823`
        );
        setFormData(res.data);
        console.log("res: ", res.data);
      } catch (error) {
        alert(error.message);
      }
    };
    getFormDetails();
  }, [id]);

  const handleSubmit = async (data) => {
    if (!userName) {
      alert("Please Enter Your Name");
    } else {
      try {
        const payload = {
          username: userName,
          heading: data.heading,
          categories: data.categories,
        };
        const res = await axios.post(
          `${process.env.REACT_APP_BACKEND_API}/submissions/formsubmit`,
          payload
        );
        if (res.data.success) {
          alert("Form Submitted Successfully!");
        }
      } catch (error) {
        alert("Something went wrong!");
      }
    }
  };
  const handleCancel = () => {};
  // console.log("formData: ", formData);
  return (
    <>
      {formData ? (
        <div className="px-5 py-3 min-h-screen">
          <div className="flex flex-col md:flex-row  md:gap-4 text-sm text-black md:text-xl absolute right-2 top-3  md:right-7  md:top-5  ">
            <label
              htmlFor="category"
              className="my-2 md:text-base font-medium text-black"
            >
              Enter Your Name
            </label>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-28 md:w-auto mb-4  text-black bg-white rounded-xl border border-solid border-neutral-400 px-3 md:py-1.5 "
              placeholder="Your Name"
            />
          </div>
          <Form
            data={formData}
            handleSave={handleSubmit}
            handleCancel={handleCancel}
          />
        </div>
      ) : (
        <div className="min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            404 - Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Oops! The page you are looking for does not exist.
          </p>
          <img
            src="/404_image.svg"
            alt="Page Not Found"
            className="w-80 h-auto"
          />
          <Link to="/" className="text-blue-500 mt-8 hover:underline">
            Go back to Home
          </Link>
        </div>
      )}
    </>
  );
};

export default UserForm;
