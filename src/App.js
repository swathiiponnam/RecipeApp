import React from "react";
import "./styles.css";
import { Routes, Route } from "react-router-dom";

import Table from "./components/table";
import Practice from "./components/Practice";
import Todo from "./components/Todo";
import MainWeather from "./weatherApp/MainWeather";
import MainPage from "./components/ecommerce/MainPage";
import ViewProducts from "./components/ecommerce/ViewProducts";
export default function App() {
  return (
    // <div>
    //   {/* <Table /> */}
    //   {/* <Practice /> */}
    //   {/* <Todo /> */}
    //   {/* <MainWeather /> */}
    //   <MainPage />
    // </div>

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/ViewProducts" element={<ViewProducts />} />
    </Routes>
  );
}
