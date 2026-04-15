import { Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./pages/Layout/Layout";
import Landing from "./pages/LandingPage/Landing";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Routes>
  
      <Route path="/" element={<Login />} />

  
      <Route path="/landing" element={<Landing />} />

      <Route path="/layout" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
