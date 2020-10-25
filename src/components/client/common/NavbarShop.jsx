import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "@material-ui/core";

import UserDrawer from "./UserDrawer";

import Logo from "../../../images/lovelyarts.png";

import "../../../styles/navbar.css";

export default class NavbarShop extends Component {
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
        <nav class="navbar sticky-top  bg-light p-3 client-nav-bar">
          <Link to="/">
            <img src={Logo} className="logo" alt="lovelyarts Logo" />
          </Link>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link">(+94) 710 193 314</Link>
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
