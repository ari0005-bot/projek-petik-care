import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import React from "react";
import "./Layout.css";

const Layout = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <MyNavbar search={search} setSearch={setSearch} />
        <main className="dashboard-content">
          <Outlet context={{ search }} />
        </main>
      </div>
    </div>
  );
};

export default Layout;
