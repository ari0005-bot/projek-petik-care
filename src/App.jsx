import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import AddDashboard from "./components/UserDashboard/AddDashboard";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/dashboard/add" element={<AddDashboard />} />
    </Routes>
  );
}

export default App;
