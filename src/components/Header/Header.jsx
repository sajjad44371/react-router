import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <>
      <div>
        <h2>This is header</h2>
        <nav className="flex gap-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/mobiles">Mobiles</NavLink>
          <NavLink to="/laptops">Laptops</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/posts">Posts</NavLink>
        </nav>
      </div>
    </>
  );
};

export default Header;
