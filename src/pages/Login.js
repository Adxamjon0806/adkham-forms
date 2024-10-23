import React, { useState } from "react";
import Logo from "../images/Logo.webp";
import UserFetch from "../Api/UserFetchApi";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  async function logIn(e) {
    e.preventDefault();
    try {
      await UserFetch.login(email, password, dispatch);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <header className="flex w-full h-screen">
      <div className="w-1/2 h-full flex justify-center items-center">
        <img src={Logo} alt="Logo" className="h-full" />
      </div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <form className="bg-gray-500 p-9 rounded-3xl text-white">
          <h3 className="text-4xl text-center">Log In</h3>
          <div className="flex justify-between items-center mt-6">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md text-black p-1"
            />
          </div>
          <div className="flex items-center gap-3 mt-6">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-md text-black p-1"
            />
          </div>
          <button
            onClick={logIn}
            className="bg-white text-black rounded-md py-1 px-3 mt-5"
          >
            Log In
          </button>
        </form>
      </div>
    </header>
  );
};

export default Login;
