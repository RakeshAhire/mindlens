import { useState } from "react";
import Button from "./Button";

const AddQuestionPopUp = ({categoryIndex, handleAddQuestion, handleCancel }) => {
  const [question, setQuestion] = useState({
    icon: "icon1.svg",
    title: "",
    options: [""],
  });

  const handleChange = (e, index) => {
    const updatedOptions = [...question.options];
    updatedOptions[index] = e.target.value;
    setQuestion((prev) => ({ ...prev, options: updatedOptions }));
  };

  const saveQuestion = () => {
    if (question) {
      handleAddQuestion(categoryIndex,question);
      handleCancel();
    } else {
      alert("Please Add Category Name");
    }
  };

  return (
    <div className="flex flex-col items-start p-5 text-sm bg-sky-50 rounded-lg max-w-[469px] max-h-screen overflow-auto pb-20">
      <h2 className="text-2xl font-semibold text-black">Add Question</h2>
      <label
        htmlFor="Question"
        className="mt-4 text-base font-medium text-black"
      >
        Question
      </label>
      <input
        type="text"
        name="category"
        value={question.title}
        onChange={(e) =>
          setQuestion((prev) => ({ ...prev, title: e.target.value }))
        }
        className="w-full px-5 py-1.5 mt-4 text-black bg-white rounded-xl border border-solid border-neutral-400"
        placeholder="Question text"
      />
      {question.options.map((item, index) => (
        <>
          <label
            htmlFor="category"
            className="mt-4 text-base font-medium text-black"
          >
            Option text
          </label>
          <input
            type="text"
            name="category"
            value={item}
            placeholder={`Option ${index + 1}`}
            onChange={(e) => handleChange(e, index)}
            className="w-full px-5 py-1.5 mt-4 text-black bg-white rounded-xl border border-solid border-neutral-400"
            />
        </>
      ))}
      <div
        className="mt-4 font-semibold text-right text-blue-700 uppercase cursor-pointer"
        onClick={(e) =>
          setQuestion((prev) => ({ ...prev, options: [...prev.options, ""] }))
        }
      >
        Add Option
      </div>
      <div className="w-full flex flex-col item-center md:flex-row items-center justify-center gap-4 text-sm leading-5 text-center mt-7">
        <Button
          type="save"
          className="uppercase px-14 py-2 border rounded-xl font-bold"
          handleClick={saveQuestion}
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
    </div>
  );
};

export default AddQuestionPopUp;
