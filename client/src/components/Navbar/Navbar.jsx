import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-[#101010] sticky w-full h-[10vh] left-[20%] top-0   text-lg items-center flex justify-end px-7 gap-5">
      <div>
        <Link  className="text-gray-400 font-bold" to={"/sign-up"}>
          Sign up
        </Link>
      </div>
      <div>
        <Link to="/login">
          <button className=" bg-white text-slate-800 px-5 py-2 rounded-full font-bold">
            Log in
          </button>
        </Link>
      </div>
    </header>
  );
}
