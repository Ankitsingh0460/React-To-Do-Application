import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./component/Create";
import Update from "./component/Update";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
