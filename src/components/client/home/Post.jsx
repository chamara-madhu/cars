import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import moment from "moment";

import pic from "../../../images/pic.png";
import pic1 from "../../../images/1.jpg";
import pic2 from "../../../images/2.jpg";
import pic3 from "../../../images/3.jpg";
import pic4 from "../../../images/4.jpg";
import elepant from "../../../images/elepant.jpg";

import "../../../styles/post.css";

export default class Post extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="post">
          <Link to="/">
            <div className="img-div">
              <p className="stock">Out of Stock</p>
              <img src={pic} alt="name" />
            </div>
          </Link>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="img-div">
            <p className="stock">Out of Stock</p>
            <img src={pic1} alt="name" />
          </div>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="img-div">
            <p className="stock">Out of Stock</p>
            <img src={pic2} alt="name" />
          </div>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="img-div">
            <p className="stock">Sold</p>
            <img src={pic3} alt="name" />
          </div>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="img-div">
            <p className="stock">Out of Stock</p>
            <img src={pic4} alt="name" />
          </div>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="img-div">
            <p className="stock">Out of Stock</p>
            <img src={elepant} alt="name" />
          </div>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="img-div">
            <p className="stock">Out of Stock</p>
            <img src={elepant} alt="name" />
          </div>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="img-div">
            <p className="stock">Out of Stock</p>
            <img src={elepant} alt="name" />
          </div>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="img-div">
            <p className="stock">Out of Stock</p>
            <img src={elepant} alt="name" />
          </div>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="img-div">
            <p className="stock">Out of Stock</p>
            <img src={elepant} alt="name" />
          </div>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="img-div">
            <p className="stock">Out of Stock</p>
            <img src={elepant} alt="name" />
          </div>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="img-div">
            <p className="stock">Out of Stock</p>
            <img src={elepant} alt="name" />
          </div>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="img-div">
            <p className="stock">Out of Stock</p>
            <img src={elepant} alt="name" />
          </div>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="img-div">
            <p className="stock">Out of Stock</p>
            <img src={elepant} alt="name" />
          </div>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="img-div">
            <p className="stock">Out of Stock</p>
            <img src={elepant} alt="name" />
          </div>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="img-div">
            <p className="stock">Out of Stock</p>
            <img src={elepant} alt="name" />
          </div>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="img-div">
            <p className="stock">Out of Stock</p>
            <img src={elepant} alt="name" />
          </div>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="img-div">
            <p className="stock">Out of Stock</p>
            <img src={elepant} alt="name" />
          </div>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="img-div">
            <p className="stock">Out of Stock</p>
            <img src={elepant} alt="name" />
          </div>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="img-div">
            <p className="stock">Out of Stock</p>
            <img src={elepant} alt="name" />
          </div>
          <div className="row m-0">
            <div className="col p-0">
              <p className="postedAt">1 day ago</p>
            </div>
            <div className="col p-0">
              <p className="location">
                Rajagiriya, Colombo &nbsp;
                <ReactCountryFlag
                  countryCode="LK"
                  svg
                  style={{
                    fontSize: "1em",
                  }}
                  aria-label="Sri Lanka"
                />
              </p>
            </div>
          </div>

          <p className="name">
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
            Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall Art
          </p>
          <p className="size">36 * 24</p>

          <div className="row m-0">
            <div className="col p-0">
              <p className="price">Rs. 2500</p>
            </div>
            <div className="col p-0">
              <p className="contact">+94 710193314</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
