import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Submissions = () => {
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    const getAllSubmissions = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_API}/submissions/getall/`
        );
        setSubmittedData(res.data);
      } catch (error) {
        alert(error.message);
      }
    };
    getAllSubmissions();
  }, []);
  return (
    <div className="overflow-x-auto flex flex-col gap-7 pt-4">
      <div className="text-lg font-semibold text-black md:text-4xl ">
        Submitted Forms
      </div>
      <table className="table-auto min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Form Heading</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.length > 0 ? (
            submittedData.map((form) => (
              <tr key={form._id} className="bg-white">
                <td className="border px-4 py-2">{form.username}</td>
                <td className="border px-4 py-2">{form.heading}</td>
                <td className="border px-4 py-2">{form.createdAt}</td>
                <td className="border px-4 py-2 text-center">
                  <Link
                    to={`/submission/form/${form._id}`}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr className="text-lg text-gray-600 mb-8">
              <td>Oops! No one Submitted the form.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Submissions;
