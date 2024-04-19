import React, { useState } from "react";
import Button from "./Button";

const AddCategoryPopUp = ({ handleAddCategory, handleCancel }) => {
  const [category, setCategory] = useState("");

  const handleSave = () => {
    if (category) {
      handleAddCategory(category);
      handleCancel();
    } else {
      alert("Please Enter Category ");
    }
  };

  return (
    <section className="flex flex-col items-start p-5 text-sm bg-sky-50 rounded-lg max-w-[469px]">
      <h2 className="text-2xl font-semibold text-black">Add Category</h2>
      <label
        htmlFor="category"
        className="mt-4 text-base font-medium text-black"
      >
        Category
      </label>
      <input
        type="text"
        id="category"
        name="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        className="w-full px-5 py-1.5 mt-4 text-black bg-white rounded-xl border border-solid border-neutral-400"
        placeholder="Category text"
      />
      <div className="w-full flex flex-col item-center md:flex-row items-center justify-center gap-4 text-sm leading-5 text-center mt-7">
        <Button
          type="save"
          className="uppercase px-14 py-2 border rounded-xl font-bold"
          handleClick={handleSave}
        >
          Save
        </Button>
        <Button
          handleClick={handleCancel}
          className="uppercase px-12 py-2 border rounded-xl font-bold"
        >
          Cancel
        </Button>
      </div>
    </section>
  );
};

export default AddCategoryPopUp;
