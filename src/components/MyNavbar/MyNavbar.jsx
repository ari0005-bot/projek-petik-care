import { useEffect, useState } from "react";
import "./MyNavbar.css";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import React from "react";

const MyNavbar = ({ search, setSearch }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const getUserLogin = () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const decoded = jwtDecode(token);
      console.log(decoded);
      setUsername(decoded.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserLogin();
  }, []);

  return (
    <ul className="navbar">
      <li>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </li>
      <li>{username}</li>
      <li>Profile</li>
      <li>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </li>
    </ul>
  );
};

export default MyNavbar;
