import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Admin from "./components/Admin/Admin";
import Dashboard from "./components/Admin/Dashboard";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
        <Route path='/admin/dashboard' element={<Admin />}> 
              <Route path="/admin/dashboard" element={<Dashboard/>}/>
        </Route>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
