<<<<<<< Updated upstream
import React from "react";
import { Link } from "react-router-dom";

=======
import { Link } from "react-router-dom";
>>>>>>> Stashed changes
export default function Login() {
  return (
    <div className="">
      <div className="flex justify-center p-[20px] border-b border-stone-300">
        <svg width="30" height="30" fill="black" className="mt-2 ">
          <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" />
        </svg>
        <h1 className="text-2xl font-bold pb-2">Nerimfy</h1>
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex flex-col w-[40%]">
          <div className="flex flex-col pb-2">
            <label className="font-bold text-sm pb-2">Email addrress</label>
            <input
              className="block  shadow-md h-[45px] border border-[#808080] rounded-[4px] hover:border-stone-900 p-2"
              placeholder="Email address"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-sm pb-2">Password</label>
            <input
              className="block  shadow-md h-[45px] border border-[#808080] rounded-[4px] hover:border-stone-900 p-2"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-end mt-4">
            <button className="text-md bg-[#1fdf64] px-4 py-2 rounded-full font-semibold w-[120px] h-[50px] hover:w-[125px] hover:h-[52px]">
              LOG IN
            </button>
          </div>
          <div className="border-b border-stone-300 mt-4"></div>
          <div className="flex justify-center mt-4">
            <h1 className="text-lg font-bold pb-2">Don't have an account?</h1>
          </div>
          <Link to="/sign-up">
          <div>
            <Link to={'/sign-up'}>
              <button className="text-gray-600 mb-2 tracking-wide text-[14px] border border-[#808080] px-4 py-2 rounded-full font-bold w-full h-[50px] hover:border-stone-900">
                SIGN UP FOR NERIMFY
              </button>
            </Link>
          </div>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
