import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import App from "./App";


const RouterWeb = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    } 
  ]);


  export default RouterWeb;