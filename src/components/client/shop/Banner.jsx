import React, { Component } from "react";

import "../../../styles/banner.css";

import Cover from "../../../images/cover.jpg";
export default class Banner extends Component {
  render() {
    return (
      <div style={{ height: 300 }}>
        <img src={Cover} className="cover-img" alt="cover" />
      </div>
    );
  }
}
