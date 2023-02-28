import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "page";

const Router : React.FC = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};

export default Router;
