import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../styles/footer.css";

import logo from "../../../images/lovelyarts.png";

export default class FooterShop extends Component {
  // scroll to top
  handleTopUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid footer-sec">
          <div className="row footer">
            <div className="col">
              <a
                href="https://www.facebook.com/Ransis-Arcade-1727332197501318/"
                target="_blank"
                className="follow-us mr-3"
                rel="noopener noreferrer"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
              <a
                href="https://www.facebook.com/Ransis-Arcade-1727332197501318/"
                target="_blank"
                className="follow-us"
                rel="noopener noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <img src={logo} className="footer-logo" alt="lovelyarts logo" />
              <p>
                <i className="fa fa-map-marker mr-4" /> No. 77/A, Buthgamuwa
                Road, Kalapaluwawa, Rajagiriya.
              </p>

              <p>
                {" "}
                <i className="fa fa-envelope" />{" "}
                <Link to="mailto:ransisarcade@gmail.com">
                  lovelyartsinfo@gmail.com
                </Link>
              </p>

              <p>
                <i className="fa fa-mobile-alt" /> (+94) 710 193 314
              </p>
            </div>
          </div>

          <div className="row footer mb-0">
            <div className="col mt-3">
              <span
                style={{
                  fontSize: "14px",
                }}
              >
                &copy; 2020 lovelyarts.store
              </span>
              <span
                style={{
                  display: "block",
                  float: "right",
                  background: "#000",
                  padding: "7px 12px",
                  color: "#fff",
                  fontSize: "30px",
                  cursor: "pointer",
                }}
                onClick={this.handleTopUp}
              >
                <i className="fas fa-angle-up"></i>
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
