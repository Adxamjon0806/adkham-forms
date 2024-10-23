import React from "react";
import Logo from "../images/Logo.webp";
import searchIcon from "../images/search.svg";
import { useDispatch, useSelector } from "react-redux";
import UserFetch from "../Api/UserFetchApi";
import { Link } from "react-router-dom";

const Nav = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  async function logout() {
    try {
      await UserFetch.logout(dispatch);
    } catch (e) {
      console.log(e);
    }
  }
  console.log(user.email);
  return (
    <nav className="flex justify-between items-center px-5 py-3">
      <div className="flex items-center gap-3">
        <img src={Logo} alt="logo" width={50} className="rounded-full" />
        <h3 className="text-2xl">Forms</h3>
      </div>
      <div className="relative">
        <button className="absolute top-2 left-2">
          <img src={searchIcon} alt="seach-icon" />
        </button>
        <input
          className="w-[500px] bg-slate-300 px-11 py-2 rounded-3xl"
          placeholder="Search"
        />
      </div>
      <div>
        {user.id ? (
          <div className="flex gap-7 items-center">
            <p>{user.email}</p>
            <button
              className="bg-black text-white px-3 py-2 rounded-xl"
              onClick={logout}
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex gap-7 items-center">
            <Link className="bg-green-500 px-3 py-2 rounded-xl" to={"/login"}>
              Log In
            </Link>
            <Link
              className="border-2 border-black px-3 py-2 rounded-xl"
              to={"/registration"}
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
