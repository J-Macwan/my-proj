// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";

import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import UserProfile from "./components/UserProfile";
import "./App.css";
import "./components/Post";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route
            path="/profile/:userId"
            element={
              <UserProfile user={{ name: "John Doe", profilePic: "..." }} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
