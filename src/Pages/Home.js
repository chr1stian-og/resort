import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const beachVideo = require("../beach Video.mp4");

function Home() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  function openGallery() {
    window.open("http://localhost:3001/", "_self");
  }

  return (
    <div>
      <div>
        <div className="flex justify-between ">
          <h1 className=" text-black md:text-3xl text-2xl flex justify-center md:m-3 m-8 align-center">
            Welcome to Calanga
          </h1>
          <div className="flex">
            <button className="text-2xl mx-4 my-2 border outline px-6">Book now</button>
            <button className="text-5xl mx-4 my-2">=</button>
          </div>
        </div>
        <video
          src={beachVideo}
          className="fixed w-max h-max z-0 object-cover"
          loop
          muted
          autoPlay
          typeof="video/mp4"
        ></video>
        <div
          className="items-center align-center gap-3 justify-center md:flex grid-cols-1"
          style={{ height: "25vw" }}
        >
          <div className="flex justify-center align-center md:h-0 h-6">
            <Link to={isAuthenticated === true ? "/book" : "/login"}>
              <button className="relative group text-2xl text-black mx-4 my-2 border outline overflow-hidden px-6 h-12 bg-white hover:bg-gray-300 flex space-x-3 items-center duration-500">
                Make A Reservation
                <div className="flex items-center -space-x-3 translate-x-3">
                  <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
