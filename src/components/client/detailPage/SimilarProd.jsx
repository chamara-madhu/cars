import React, { Component } from "react";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import Post from "../home/Post";

import pic4 from "../../../images/4.jpg";
import pic1 from "../../../images/1.jpg";
import pic2 from "../../../images/2.jpg";
import pic3 from "../../../images/3.jpg";

import pic from "../../../images/pic.png";
import { Link } from "react-router-dom";

const photos = [
  {
    src: pic1,
    cols: 1,
  },
  {
    src: pic2,
    cols: 2,
  },
  {
    src: pic3,
    cols: 2,
  },
  {
    src: pic4,
    cols: 1,
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    cols: 1,
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    cols: 3,
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    cols: 2,
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    cols: 1,
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    cols: 4,
  },
  {
    src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
    cols: 3,
  },
  {
    src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
    cols: 2,
  },
  {
    src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
    cols: 2,
  },
  {
    src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
    cols: 2,
  },
  {
    src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
    cols: 2,
  },
  {
    src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
    cols: 2,
  },
  {
    src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
    cols: 2,
  },
];

export default class SimilarProd extends Component {
  render() {
    return (
      <div className="similar-prod">
        <div className="row m-0">
          <div className="similer-col">
            <p className="heading">Similar Arts</p>
            {/* <Post /> */}
          </div>
          <div className="shop-col">
            <div className="shop-div">
              <img src={pic} className="shop-logo" alt="shop logo" />
              <p className="name">Art Cafe</p>
              <p className="location">Colombo</p>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                overflow: "hidden",
              }}
            >
              <GridList
                cellHeight={160}
                style={{ width: "100%", height: 660 }}
                cols={2}
              >
                {photos.map((art, i) => (
                  <GridListTile key={art.src}>
                    <img src={art.src} alt="art" />
                  </GridListTile>
                ))}
              </GridList>

              <Link to="/shop" className="see-more">
                GO TO SHOP
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
