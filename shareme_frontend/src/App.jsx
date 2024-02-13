import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
        <RouterProvider router={router} />;
      </GoogleOAuthProvider>
      ;
    </>
  );
};

export default App;
