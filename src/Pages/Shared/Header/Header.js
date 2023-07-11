import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
// import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((er) => console.error(er));
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link to="/inventories/manage">Manage Items</Link>
          </li>
          <li>
            <Link to="/inventories/add">Add Items</Link>
          </li>
          <li>
            <Link to="/inventories/my">My Items</Link>
          </li>

          <li>
            <button
              className="hover:bg-red-500 hover:text-white border border-red-500 py-1 px-5 rounded-md duration-200 ease-in-out text-red-500"
              onClick={handleLogOut}
            >
              Sign out
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">
            {" "}
            <button className="hover:bg-cyan-500 border text-xl normal-case text-white border-cyan-500 py-1 px-3 rounded-md duration-200 ease-in-out">
              Login
            </button>
          </Link>
        </li>
      )}
    </React.Fragment>
  );

  return (
    <div className="navbar bg-slate-900 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow text-white rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-white normal-case text-xl">
          Auto<span className="text-cyan-500">Ment</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white p-0">{menuItems}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Header;
