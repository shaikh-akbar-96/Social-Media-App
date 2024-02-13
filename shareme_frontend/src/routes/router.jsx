import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../container/Home";
import Login from "../components/Login";
// import Root from "../Layout/Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/*" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

export default router;
