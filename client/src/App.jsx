"use strict";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
export default function App() {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <div className=" min-w-[80%] h-screen   overflow-hidden overflow-y-scroll">
        <Navbar />

        <Outlet />
      </div>
    </div>
  );
}
