
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="jobs" element={<Home />} />
      <Route path="/jobs/:id" element={<Detail />} />
    </Routes>
  </BrowserRouter>
  );
}



export default App;
