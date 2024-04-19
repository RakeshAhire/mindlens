import { useState } from "react";
import PopUpModal from "./PopUpModel";
import EditQuestionPopUp from "./EditQuestionPopUp";

const Question = ({
  data,
  handleEditQuestion,
  handleSelectAnswer,
  questionIndex,
  categoryIndex,
  isAdmin,
}) => {
  const [editQuestionPopUp, setEditQuestionPopUp] = useState(false);

  const handleEditPopUp = () => {
    setEditQuestionPopUp(!editQuestionPopUp);
  };

  return (
    <div className="w-full flex gap-3 mb-8 relative max-md:flex-wrap md:flex-col lg:flex-row lg:items-center ">
      <div className="flex gap-5">
        <img
          loading="lazy"
          src={data.icon}
          className="shrink-0  aspect-[1.3] w-[26px]"
          alt=""
        />
        <div className="min-w-[150px] font-medium">{data.title}</div>
      </div>
      <div className="w-full flex gap-0  max-md:flex-wrap ">
        {data.options.map((option, index) =>
          data.selectedAnswer === index + 1 ? (
            <button
              key={option}
              onClick={() =>
                handleSelectAnswer(categoryIndex, questionIndex, option)
              }
              className={`w-full cursor-pointer py-2 px-4 border-2 border-blue-500 
              bg-blue-500 text-slate-100 
              ${
                index === 0 &&
                "rounded-tl-md rounded-tr-md md:rounded-tr-none md:rounded-tb-md md:rounded-bl-md"
              }
              ${
                index === data.options.length - 1 &&
                "rounded-bl-md rounded-br-md md:rounded-tr-md md:rounded-br-md md:rounded-bl-none"
              }`}
            >
              {option}
            </button>
          ) : (
            <button
              key={option.id}
              onClick={() =>
                handleSelectAnswer(categoryIndex, questionIndex, option)
              }
              className={`w-full cursor-pointer py-2 px-4 overflow-hidden border-2 border-blue-500 
            hover:bg-blue-500 hover:text-slate-100 
              ${
                index === 0 &&
                "rounded-tl-md rounded-tr-md md:rounded-tr-none md:rounded-tb-md md:rounded-bl-md"
              }
              ${
                index === data.options.length - 1 &&
                "rounded-bl-md rounded-br-md md:rounded-tr-md md:rounded-br-md md:rounded-bl-none"
              }`}
            >
              {option}
            </button>
          )
        )}
      </div>
      {isAdmin && (
        <button
          onClick={handleEditPopUp}
          className="hover:bg-gray-300 hover:rounded-full"
        >
          <img
            loading="lazy"
            src="/sidebarImages/pencil.png"
            className=" w-[20px] hover:text-green-500 hover:scale-110 transform transition-transform duration-300 absolute top-1 left-full lg:top-2 "
            alt=""
          />
        </button>
      )}
      {editQuestionPopUp && (
        <PopUpModal>
          <EditQuestionPopUp
            data={data}
            handleEditQuestion={handleEditQuestion}
            handleCancel={handleEditPopUp}
            questionIndex={questionIndex}
            categoryIndex={categoryIndex}
          />
        </PopUpModal>
      )}
    </div>
  );
};

export default Question;
