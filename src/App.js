import React from "react";
import "antd/dist/reset.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Routes/ProtectedRoute";
import PublicRoutes from "./Routes/PublicRoutes";
import NotFound from "../src/Pages/NotFound";
import Chat from "../src/Pages/Chat";
import Component1 from "../src/Component/Component1";
import Dashboard from "../src/Pages/Dashboard";
import Navbar from "../src/Component/Common/Navbar";
import Register from './Pages/Register';
import Login from './Pages/Login';
const Component2 = () => {
  return <h1>Component 2</h1>;
};
const HomePage = () => {
  return <h1>HomePage 1</h1>;
};

const LoginPage = () => {
  return <h1>LoginPage </h1>;
};
const SignUpPage = () => {
  return <h1>SignUpPage </h1>;
};

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Router>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route element={<Component1 />} path="/ch" exact />
              <Route element={<Chat />} path="/chat" />
              <Route element={<Component2 />} path="/dash" />
              <Route element={<Dashboard />} path="/dashboard" />
            </Route>
            <Route element={<PublicRoutes />}>
              <Route element={<HomePage />} path="/home" />
              <Route element={<Login />} path="/login" />
              <Route element={<Register />} path="/signup" />
            </Route>
            <Route element={<NotFound />} path="*" />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
