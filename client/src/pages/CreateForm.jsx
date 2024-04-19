import React, { useState } from "react";
import { Form } from "../components/Form";
import axios from "axios";

const CreateForm = () => {
  const [formData, setFormData] = useState({
    heading: "",
    categories: [],
  });
  const isAdmin = true;
  const handleSubmit = async (data) => {
    if (!formData.heading) {
      alert("Please Enter Heading");
    } else {
      try {
        const payload = {
          heading: formData.heading,
          categories: data.categories,
        };
        const res = await axios.post(
          `${process.env.REACT_APP_BACKEND_API}/forms/create`,
          payload
        );
        console.log("res: ", res);
        if (res.data.success) {
          alert("Form Created Successfully!");
        }
      } catch (error) {
        alert(error.message);
      }
    }
  };
  const handleCancel = () => {};
  return (
    <>
      <div className="flex gap-4  text-sm text-black md:text-xl absolute left-80 top-[70px]  ">
        <input
          type="text"
          value={formData.heading}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, heading: e.target.value }))
          }
          className=" text-black py-1 px-1 bg-white rounded-md  border border-solid border-neutral-400"
          placeholder="Enter Heading"
        />
      </div>
      <Form
        data={formData}
        handleSave={handleSubmit}
        handleCancel={handleCancel}
        pageHeading={"Configure form"}
      />
    </>
  );
};

export default CreateForm;
