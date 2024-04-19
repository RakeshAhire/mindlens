import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Submissions from "../pages/Submissions";
import UserForm from "../pages/UserForm";
import Wrapper from "../components/Wrapper";
import CreateForm from "../pages/CreateForm";
import NoPageFound from "../pages/NoPageFound";
import CretedList from "../pages/CretedFormList";
import SubmissionSingleForm from "../pages/SumissionsSinglForm";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Wrapper>
            <Submissions />
          </Wrapper>
        }
      />
      <Route
        path="/createdlist"
        element={
          <Wrapper>
            <CretedList />
          </Wrapper>
        }
      />
      <Route
        path="/form/:id"
        element={
            <UserForm />
        }
      />
      <Route
        path="/submission/form/:id"
        element={
          <Wrapper>
            <SubmissionSingleForm />
          </Wrapper>
        }
      />
      <Route
        path="/createform"
        element={
          <Wrapper>
            <CreateForm />
          </Wrapper>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="*"
        element={
          <Wrapper>
            <NoPageFound />
          </Wrapper>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
