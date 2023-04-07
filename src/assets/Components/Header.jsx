import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="Header border p-8 rounded-lg shadow-sm font-bold  flex justify-between">
      <div>
        <h2 className="font-bold">
          <NavLink to="/">Stack</NavLink>
        </h2>
      </div>

      <ul className="flex justify-around">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>

        <li>
          <NavLink to="/about"> About us</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
