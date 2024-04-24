import React from "react";
import { router } from "../routes";
import { Route, Routes } from "react-router-dom";

const RouterComponent = () => {
  return (
    <div>
      <Routes>
        {router.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </div>
  );
};

export default RouterComponent;
