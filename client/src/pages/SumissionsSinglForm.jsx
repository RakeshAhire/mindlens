import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Form } from "../components/Form";

const SubmissionSingleForm = () => {
  const [formData, setFormData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getFormDetails = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_API}/submissions/getsingle/${id}`
          // `${process.env.REACT_APP_BACKEND_API}/submissions/getsingle/6620c85389f09eb5c59e7823`
        );
        setFormData(res.data);
      } catch (error) {
        alert(error.message);
      }
    };
    getFormDetails();
  }, [id]);

  const handleSubmit = async (payload) => {
    console.log("payload: ", payload);
  };
  const handleCancel = () => {};
  return (
    <>
      {formData && (
        <>
          <div className="flex gap-4  text-sm text-black md:text-xl absolute right-7 top-5  ">
            <label
              htmlFor="category"
              className="my-2 text-base font-medium text-black"
            >
              Submitted By :
            </label>
            <input
              type="text"
              name="userName"
              readOnly
              value={formData.username}
              className="px-5 py-1 text-black bg-white rounded-xl border border-solid border-neutral-400"
              placeholder="Your Name"
            />
          </div>
          <Form
            data={formData}
            handleSave={handleSubmit}
            handleCancel={handleCancel}
          />
        </>
      )}
    </>
  );
};

export default SubmissionSingleForm;
