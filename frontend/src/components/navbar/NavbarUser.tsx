import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import axios from "axios";

const NavbarUser: React.FC = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={logo} alt="Logo FineJob" width={40} />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li>

            </li>
          <li className="nav-item active">
            <a className="nav-link" href="/posts">
              Posts
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Settings
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarUser;
