import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CretedFormList = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const getAllSubmissions = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/forms/getall/`);
        setFormData(res.data);
      } catch (error) {
        alert(error.message);
      }
    };
    getAllSubmissions();
  }, []);

  const handleClick = async (link) => {
    console.log("link: ", link);
    try {
      await navigator.clipboard.writeText(link);
      alert("Link copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
  return (
    <div className="overflow-x-auto flex flex-col gap-7 pt-4">
      <div className="text-lg font-semibold text-black md:text-4xl ">
        Created Forms
      </div>
      <table className="table-auto min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Form Heading</th>
            <th className="px-4 py-2">Total Categories</th>
            <th className="px-4 py-2">Created Time</th>
            <th className="px-4 py-2">Last Updated Time</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {formData?.map((form) => (
            <tr key={form.id} className="bg-white">
              <td className="border px-4 py-2">{form.heading}</td>
              <td className="border px-4 py-2">{form.categories.length}</td>
              <td className="border px-4 py-2">{form.createdAt}</td>
              <td className="border px-4 py-2">{form.updatedAt}</td>
              <td className="border px-4 py-2 flex justify-center items-center gap-4">
                <Link
                  to={`/form/${form._id}`}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  View
                </Link>
                <button
                  to={`/form/${form._id}`}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={() =>
                    handleClick(
                      `${process.env.REACT_APP_FRONTEND_API}/form/${form._id}`
                    )
                  }
                >
                  Copy Link
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CretedFormList;
