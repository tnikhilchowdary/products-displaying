import React, { useState } from "react";
import './Navbar.css';

const Navbar = ({search, setSearch}) => {
  return (
    <div className="navbar">
      <h1>TNC Store</h1>
      <div className="search-wrapper">
        <input type="text" 
        value={search}
        placeholder="Search for Products" 
        onChange={(e) => setSearch(e.target.value)} />
      </div>
    </div>
  );
};

export default Navbar;
