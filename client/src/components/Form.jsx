import { useState } from "react";
import Category from "./Category";
import QuestionList from "./QuestionList";
import Button from "./Button";
import AddCategoryPopUp from "./AddCategoryPopUp";
import PopUpModal from "./PopUpModel";

export const Form = ({ data, pageHeading, handleSave, handleCancel }) => {
  const [formData, setFormData] = useState(data);
  const [addCategoryPopUp, setCategoryPopUp] = useState(false);
  const isAdmin = JSON.parse(localStorage.getItem("admin")) || "";
  // const isAdmin = storedUser;

  const handleAddCategoryPopUp = () => {
    setCategoryPopUp(!addCategoryPopUp);
  };

  const handleSelectAnswer = (categoryIndex, questionIndex, selectedOption) => {
    const updatedData = [...formData.categories].map(
      (category, categoryIndexOfMap) => {
        if (categoryIndex === categoryIndexOfMap) {
          const updatedQuestion = category.questions.map(
            (question, questionIndexOfMap) => {
              if (questionIndex === questionIndexOfMap) {
                return {
                  ...question,
                  selectedAnswer: question.options.indexOf(selectedOption) + 1,
                };
              } else {
                return question;
              }
            }
          );
          // console.log("updatedQuestion: ", updatedQuestion);
          return { ...category, questions: updatedQuestion };
        } else {
          return category;
        }
      }
    );
    // console.log("updatedData: ", updatedData);
    setFormData((prev) => ({ ...prev, categories: updatedData }));
  };

  const handleAddCategory = (title) => {
    setFormData((prev) => ({
      ...prev,
      categories: [...prev.categories, { title: title, questions: [] }],
    }));
  };

  const handleAddQuestion = (categoryIndex, question) => {
    const updatedCategory = formData.categories.map((category, index) => {
      if (categoryIndex === index) {
        return {
          ...category,
          questions: [...category.questions, question],
        };
      }
      return category;
    });
    // console.log("updatedCategory: ", updatedCategory);
    setFormData((prev) => ({ ...prev, categories: updatedCategory }));
  };

  const handleEditQuestion = (categoryIndex, questionIndex, payload) => {
    const updatedData = [...formData.categories].map(
      (category, categoryIndexOfMap) => {
        if (categoryIndex === categoryIndexOfMap) {
          const updatedQuestion = category.questions.map(
            (question, questionIndexOfMap) => {
              if (questionIndex === questionIndexOfMap) {
                return payload;
              } else {
                return question;
              }
            }
          );
          // console.log("updatedQuestion: ", updatedQuestion);
          return { ...category, questions: updatedQuestion };
        } else {
          return category;
        }
      }
    );
    setFormData((prev) => ({ ...prev, categories: updatedData }));
  };

  return (
    <>
      <div className="text-2xl font-semibold text-black  md:text-4xl mb-6 ">
        {pageHeading || "Display Form"}
      </div>
      <div className="text-sm text-black md:text-xl mt-12 ">
        Form Heading: {formData.heading}
      </div>
      <div className="w-full flex flex-col mt-4 md:mt-6">
        {formData.categories?.map((category, index) => (
          <Category key={category._id} title={category.title} isAdmin={isAdmin}>
            <QuestionList
              handleAddQuestion={handleAddQuestion}
              handleEditQuestion={handleEditQuestion}
              handleSelectAnswer={handleSelectAnswer}
              category={category}
              categoryIndex={index}
              isAdmin={isAdmin}
            />
          </Category>
        ))}
        {isAdmin && (
          <button
            className="mt-2.5 w-max flex items-start justify-start text-sm font-semibold text-blue-700 uppercase max-md:max-w-full"
            // onClick={handleAddCategory}
            onClick={handleAddCategoryPopUp}
          >
            Add category
          </button>
        )}
        {addCategoryPopUp && (
          <PopUpModal>
            <AddCategoryPopUp
              handleAddCategory={handleAddCategory}
              handleCancel={handleAddCategoryPopUp}
            />
          </PopUpModal>
        )}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm leading-5 text-center mt-7">
        <Button
          type="save"
          className="uppercase px-14 py-2 border rounded-xl font-bold"
          handleClick={() => handleSave(formData)}
        >
          Save
        </Button>
        <Button
          className="uppercase px-12 py-2 border rounded-xl font-bold"
          handleClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
    </>
  );
};
