import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/register";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Bar from "./pages/dashboard/bar";
import Table from "./pages/dashboard/table";
import Booking from "./pages/dashboard/booking/booking";
import Users from "./pages/dashboard/profile/Users";
import Profile from "./pages/dashboard/profile/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="bar" element={<Bar />} />
          <Route path="table" element={<Table />} />
          <Route path="users" element={<Users />} />
          <Route path="profile" element={<Profile />} />
          <Route path="booking" element={<Booking />} />
        </Route>
        <Route path="*" element={<h1 className="text-primary text-center m-5 p-5">404</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
