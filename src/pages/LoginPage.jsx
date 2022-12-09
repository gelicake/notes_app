import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useUserContext } from "../components/UserProvider";

const LoginPage = () => {
  const { signin, user } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleLogin = () => {
    signin(email, password)
  };
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="py-4">
      <h2 className="text-2xl text-center">Login Page</h2>
      <div className="max-w-xs mx-auto flex flex-col gap-2">
        <input
          type="email"
          className="border border-gray-300 py-1 px-2 rounded-md"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <input
          type="password"
          className="border border-gray-300 py-1 px-2 rounded-md"
          value={password}
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <button
          className="bg-slate-400 py-1 px-2 rounded-md text-white"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="text-center">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
