import React, { Component } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-white shadow p-5 md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <span className="text-2xl cursor-pointer">
            <h1
              onClick={() => window.open("http://localhost:3000/", "_self")}
              className="text-4xl hover:text-pink-900 duration-500"
            >
              Calanga
            </h1>
          </span>
          <span className="text-3xl cursor-pointer md:hidden block">
            <h3 id="menu" onClick={(e) => this.showMenu(e)}>
              =
            </h3>
          </span>
        </div>
        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
          <li className="mx-3 my-6 md:my-0">
            <Link to="/">
              <h1 className="text-black hover:text-pink-900 duration-500 text-2xl">
                Home
              </h1>
            </Link>
          </li>
          <li className="mx-3 my-6 md:my-0">
            <Link to="/services">
              <h1 className="text-black hover:text-pink-900 duration-500 text-2xl">
                Services
              </h1>
            </Link>
          </li>
          <li className="mx-3 my-6 md:my-0">
            <Link to="/about">
              <h1 className="text-black hover:text-pink-900 duration-500 text-2xl">
                About
              </h1>
            </Link>
          </li>
          <li className="mx-3 my-6 md:my-0">
            <Link to="/contact">
              <h1 className="text-black hover:text-pink-900 duration-500 text-2xl">
                Contact
              </h1>
            </Link>
          </li>
          <LoginButton class_name="bg-pink-500 hover:bg-purple-600 rounded-full text-white duration-500 px-6 py-2 mx-2 my-6 md:my-0" />
          <LogoutButton class_name="bg-pink-500 hover:bg-purple-600 rounded-full text-white duration-500 px-6 py-2 mx-2 my-6 md:my-0" />
          {/* <button
        className="bg-pink-500 hover:bg-purple-600 rounded-full text-white duration-500 px-6 py-2 mx-2 my-6 md:my-0"
        onClick={() => this.login()}
      >
        {this.state.isLogged === true ? "Logout" : "Login"}
      </button> */}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
