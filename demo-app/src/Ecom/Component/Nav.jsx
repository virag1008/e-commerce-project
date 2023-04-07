import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const clickEvent = () => {
    localStorage.clear();
    navigate("/signup");
  };

  const auth = localStorage.getItem("user");

  return (
    <div>
      <ul>
        <li className="nave">
          <NavLink to="/">Home </NavLink>
        </li>
        <li className="nave">
          <NavLink to="/add"> Add </NavLink>
        </li>
        <li className="nave">
          <NavLink to="/update"> update</NavLink>
        </li>
        <li className="nave">
          <NavLink to="/profile">profile</NavLink>
        </li>
        <li className="nave">
          {auth ? (
            <NavLink onClick={clickEvent} to="/signup">
              logout
            </NavLink>
          ) : (
            <NavLink to="/signup"> Signup </NavLink>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
