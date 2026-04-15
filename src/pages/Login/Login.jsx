import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logoPeTIK from "../../assets/logoPeTIK.png";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/login", {
        email,
        password,
      });

      console.log(res.data);

      const token = res?.data?.data?.tokens?.accessToken;
      const user = res?.data?.data?.user;

      if (!token || !user) {
        console.log("TOKEN / USER TIDAK ADA!");
        return;
      }

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "pengasuhan") {
        navigate("/layout/dashboard");
      } else {
        navigate("/landing");
      }
    } catch (error) {
      console.log(error?.response?.data || error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token && user) {
      if (user.role === "pengasuhan") {
        navigate("/layout/dashboard", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    }
  }, []);

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="left-content">
          <div className="logo-box">
            <img src={logoPeTIK} alt="logo" width={200} />
          </div>
          <h2>Your Health, Our Priority</h2>
        </div>
      </div>

      <div className="login-right">
        <div className="form-box">
          <h2>Login</h2>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Masukkan Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Masukkan Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
