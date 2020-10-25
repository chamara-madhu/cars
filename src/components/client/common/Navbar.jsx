import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "@material-ui/core";

import UserDrawer from "./UserDrawer";

import Logo from "../../../images/lovelyarts.png";

import "../../../styles/navbar.css";

export default class Navbar extends Component {
  state = {
    // drawer
    rightDrawer: false,
  };

  // drawer user account
  toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ rightDrawer: open });
  };

  closeDrawer = () => {
    this.setState({ rightDrawer: false });
  };

  render() {
    return (
      <React.Fragment>
        <nav class="navbar sticky-top p-3 client-nav-bar">
          <Link to="/">
            <img src={Logo} className="logo" alt="lovelyarts Logo" />
          </Link>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to="/login" class="nav-link">
                Login
              </Link>
              <Link to="/register" class="nav-link">
                Register
              </Link>
              <span class="nav-link" onClick={this.toggleDrawer(true)}>
                <i className="far fa-user user-icon"></i>
              </span>
            </li>
          </ul>
        </nav>

        <Drawer
          anchor={"right"}
          open={this.state.rightDrawer}
          onClose={this.toggleDrawer(false)}
        >
          <UserDrawer closeDrawer={this.closeDrawer} />
        </Drawer>
      </React.Fragment>
    );
  }
}
