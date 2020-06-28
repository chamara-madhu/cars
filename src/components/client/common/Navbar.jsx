import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../../images/lovelyarts.png";

import "../../../styles/navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar sticky-top navbar-expand-lg bg-light py-1 px-2">
        <Link class="navbar-brand" to="/">
          <img src={logo} className="logo" alt="lovelyarts logo" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Link
              </Link>
            </li>
          </ul>
        </div> */}
      </nav>
    );
  }
}
