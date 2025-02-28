// src/components/Header.jsx
import React from "react";
import "./Header.css";

function header() {
  return (
    <header className="header">
      <div className="header-left">
        <h2>MyFacebook</h2>
      </div>
      <div className="header-right">
        <input placeholder="Search..." />
        <button>Profile</button>
      </div>
    </header>
  );
}

export default Header;
