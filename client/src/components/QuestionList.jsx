import { useState } from "react";
import Question from "./Question";
import PopUpModal from "./PopUpModel";
import AddQuestionPopUp from "./AddQuestionPopUp";

const QuestionList = ({
  category,
  categoryIndex,
  handleSelectAnswer,
  handleAddQuestion,
  handleEditQuestion,
  isAdmin,
}) => {
  const [addQuestionPopUp, setAddCategoryPopUp] = useState(false);

  const handleAddCategoryPopUp = () => {
    setAddCategoryPopUp(!addQuestionPopUp);
  };

  return (
    <div className="flex flex-col items-start py-8 pr-20 pl-8 mt-2.5 text-base text-black rounded-xl border  border-neutral-400 max-md:px-5 max-md:mr-1.5 max-md:max-w-full overflow-auto">
      {category.questions.map((question, index) => (
        <Question
          key={question._id || index}
          data={question}
          questionIndex={index}
          categoryIndex={categoryIndex}
          isAdmin={isAdmin}
          handleEditQuestion={handleEditQuestion}
          handleSelectAnswer={handleSelectAnswer}
        />
      ))}
      {isAdmin && (
        <button
          className="mt-8 text-sm font-semibold text-right text-blue-700 uppercase max-md:max-w-full"
          onClick={handleAddCategoryPopUp}
        >
          Add question
        </button>
      )}
      {addQuestionPopUp && (
        <PopUpModal>
          <AddQuestionPopUp
            categoryIndex={categoryIndex}
            handleAddQuestion={handleAddQuestion}
            handleCancel={handleAddCategoryPopUp}
          />
        </PopUpModal>
      )}
    </div>
  );
};

export default QuestionList;
