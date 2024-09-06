import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDetailPage from "./pages/UserDetailPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#F0F4F8]">
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<UserDetailPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
