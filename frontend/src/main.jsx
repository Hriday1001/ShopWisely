import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './App.scss';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Product from "./components/Product/Product.jsx";
import Layout from "./Layout.jsx";
import store from './store/store.js';
import { Provider } from "react-redux";
import Recommendation from "./components/Recommendation/Recommendation.jsx";
import Buy from "./components/Buy/Buy.jsx";
import { useState,useEffect } from "react";
import Compare from "./components/Compare/Compare.jsx";



const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "recommendation",
          element: <Recommendation/>,
        },
        {
          path: "buy",
          element : <Buy/>
        },
        {
          path: "compare",
          element : <Compare/>
        }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);
