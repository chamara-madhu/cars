import React, { Component } from "react";
import { Link } from "react-router-dom";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

// import { PhotoProvider, PhotoConsumer } from "react-photo-view";
// import "react-photo-view/dist/index.css";

import pic from "../../../images/pic.png";
import pic1 from "../../../images/1.jpg";
import pic2 from "../../../images/2.jpg";
import pic3 from "../../../images/3.jpg";
import pic4 from "../../../images/4.jpg";

const photos = [
  {
    src: pic4,
    width: 3,
    height: 4,
  },
  {
    src: pic4,
    width: 1,
    height: 1,
  },
  {
    src: pic4,
    width: 3,
    height: 2,
  },
  {
    src: pic4,
    width: 3,
    height: 4,
  },
];

export default class Detail extends Component {
  state = {
    currentImage: 0,
    viewerIsOpen: false,
  };

  openLightbox = (event, { photo, index }) => {
    this.setState({ currentImage: index, viewerIsOpen: true });
  };

  closeLightbox = () => {
    this.setState({ currentImage: 0, viewerIsOpen: false });
  };

  render() {
    return (
      <div className="cus-con-detail">
        <div className="row m-3">
          <div className="img-col p-0">
            <Link to="/" className="back-link">
              <i class="fas fa-angle-left"></i> Back
            </Link>
            <Gallery photos={photos} onClick={this.openLightbox} />
            <ModalGateway>
              {this.state.viewerIsOpen ? (
                <Modal onClose={this.closeLightbox}>
                  <Carousel
                    currentIndex={this.state.currentImage}
                    views={photos.map((x) => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
          <div className="content-col">
            <p className="location">Rajagiriya, Colombo</p>
            <p className="publish-on">1 day ago</p>
            <p className="name">
              Amazon.com Yeyo Large Elephant Art Wall Painting Decoration Wall
              Art
            </p>
            <p className="desc">
              This example demonstrates the use of the GridList TileBar to add
              an overlay to each GridListTile. The overlay can accommodate a
              title, subtitle and secondary action - in this example an
              IconButton.
            </p>
            <p className="size">24 * 34</p>
            <p className="price">Rs. 2500</p>
            <p className="phone">
              <a href="tel:+94 710 193 314">+94 710 193 314</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
