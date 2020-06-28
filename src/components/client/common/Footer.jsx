import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../styles/footer.css";

import logo from "../../../images/lovelyarts.png";

export default class Footer extends Component {
  // scroll to top
  handleTopUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid footer-sec">
          <div className="row footer">
            <div className="col-sm-6 col-md-2 pt-5  text-center">
              <p className="mb-4 footer-sub-heading">Quick links</p>
              <Link to="/">Home</Link>
              <br />
              <Link to="/about">About us</Link>
            </div>

            <div className="col-sm-6 col-md-3 pt-5 text-center">
              <p className="mb-4 footer-sub-heading">Support</p>
              <Link to="/faq">FAQs</Link>
              <br />
              <Link to="/contact">Contact us</Link>
            </div>

            <div className="col-sm-6 col-md-2 pt-5 text-center">
              <p className="mb-4 footer-sub-heading">Legal</p>
              <Link to="/">Terms & conditions</Link>
              <br />
              <Link to="/">Privacy policy</Link>
            </div>

            <div className="col-sm-6 col-md-2 pt-5 text-center">
              <p className="mb-4 footer-sub-heading">Follow Us</p>
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
            </div>

            <div className="col-md-3 pt-5">
              <table align="center" style={{ margin: "auto" }}>
                <tbody>
                  <tr>
                    <td colSpan="2">
                      <img
                        src={logo}
                        className="footer-logo"
                        alt="lovelyarts logo"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fa fa-map-marker mr-4" />
                    </td>
                    <td>No. 77/A,</td>
                  </tr>

                  <tr>
                    <td />
                    <td>Buthgamuwa Road,</td>
                  </tr>
                  <tr>
                    <td />
                    <td>Kalapaluwawa,</td>
                  </tr>

                  <tr>
                    <td />
                    <td>Rajagiriya.</td>
                  </tr>

                  <tr>
                    <td>
                      <i className="fa fa-envelope" />
                    </td>
                    <td>
                      <Link to="mailto:ransisarcade@gmail.com">
                        lovelyartsinfo@gmail.com
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <i className="fa fa-mobile-alt" />
                    </td>
                    <td>(+94) 710 193 314</td>
                  </tr>
                </tbody>
              </table>
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
