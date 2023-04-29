import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage/>} />
        <Route path="/edit39283940" element={<EditPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
