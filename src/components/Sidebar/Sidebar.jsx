import { NavLink } from "react-router-dom";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h3>PeTIK Care</h3>
      </div>
      <ul>
        <li>
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard/keluhan"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Keluhan
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard/layanan"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Layanan
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard/santri"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Santri
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard/pengasuhan"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Pengasuhan
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
