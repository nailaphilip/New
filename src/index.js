import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AddRecipe from "./AddRecipe";
import BrowseRecipes from "./BrowseRecipes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/browse" element={<BrowseRecipes />} />
      </Routes>
    </BrowserRouter>
    ,
  </React.StrictMode>
);
