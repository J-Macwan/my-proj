import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile/1">Profile</Link></li>
        <li><Link to="/photos">Photos</Link></li>
        <li><Link to="/watch">Watch</Link></li>
        <li>Live</li>
        <li>Reels</li>
        <li>Saved videos</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
