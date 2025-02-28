// src/components/Sidebar.jsx
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>Home</li>
        <li>Friends</li>
        <li>Watch</li>
        <li>Marketplace</li>
        <li>Groups</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
