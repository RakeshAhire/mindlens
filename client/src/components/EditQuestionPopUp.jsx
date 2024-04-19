import { useState } from "react";
import Button from "./Button";

const EditQuestionPopUp = ({
  data,
  questionIndex,
  categoryIndex,
  handleEditQuestion,
  handleCancel,
}) => {
  const [question, setQuestion] = useState(data);

  const handleEditOptions = (e, index) => {
    const updatedOptions = [...question.options];
    updatedOptions[index] = e.target.value;
    setQuestion((prev) => ({ ...prev, options: updatedOptions }));
  };

  const handleEdit = () => {
    handleEditQuestion(categoryIndex, questionIndex, question);
    handleCancel();
  };

  return (
    <div className="flex flex-col items-start justify-center p-5 text-sm bg-sky-50 rounded-lg max-w-[470px] ">
      <h2 className="mt-2 text-2xl font-semibold text-black">Edit Question</h2>
      <label
        htmlFor="category"
        className="my-2 text-base font-medium text-black"
      >
        Question text
      </label>
      <input
        type="text"
        name="title"
        value={question.title}
        onChange={(e) =>
          setQuestion((prev) => ({ ...prev, title: e.target.value }))
        }
        className="w-full px-5 py-1.5 mb-4 text-black bg-white rounded-xl border border-solid border-neutral-400"
        placeholder="Question text"
      />
      {question.options.map((option, index) => (
        <>
          <label
            htmlFor="Options"
            className="my-2 text-base font-medium text-black"
          >
            Option text
          </label>
          <input
            type="text"
            name="category"
            value={option}
            placeholder={`Option ${index + 1}`}
            onChange={(e) => handleEditOptions(e, index)}
            className="w-full px-5 py-1.5 mb-2 text-black bg-white rounded-xl border border-solid border-neutral-400"
          />
        </>
      ))}

      <div
        className="mt-4 font-semibold text-right text-blue-700 uppercase"
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
          handleClick={handleEdit}
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

export default EditQuestionPopUp;
