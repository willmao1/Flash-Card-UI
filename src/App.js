import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage"
import CardPage from "./pages/CardPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage/>} />
        <Route path="/card" element={<CardPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
