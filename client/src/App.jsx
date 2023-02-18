"use strict";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
export default function App() {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <div className=" min-w-[80%] h-screen p overflow-hidden overflow-y-scroll">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
