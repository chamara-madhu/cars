import React, { Component } from "react";

import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Drawer,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import Navbar from "../components/client/common/Navbar";
import Filterbar from "../components/client/home/Filterbar";
import Post from "../components/client/home/Post";
import FilterMobile from "../components/client/home/FilterMobile";
import Footer from "../components/client/common/Footer";

import { posts } from "./post";

import "../styles/home.css";

export default class Home extends Component {
  state = {
    posts: posts,
    itemsPerPage: 6,
    page: 1,

    makeAcco: true,
    modalAcco: false,
    priceAcco: false,
    conditionAcco: false,
    locationAcco: false,
    fuelAcco: false,

    checkedConditions: [],
    checkedLocation: [],
    checkedFuel: [],

    make: "",
    price: "",

    leftDrawer: false,
  };

  toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ leftDrawer: open });
  };

  handleAccordian = (name) => {
    // if (name === "name") {
    this.setState({ [name]: !this.state[name] });
    // sessionStorage.setItem("makeAcco", !this.state.makeAcco);
    // }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // checkbox condition
  handleCheckboxes = (value, name) => {
    console.log(value, name);
    const currentIndex = this.state[name].indexOf(value);
    const newChecked = [...this.state[name]];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({ [name]: newChecked, page: 1 });
  };

  handlePagination = (event, value) => {
    // scroll to top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    this.setState({ page: value });
  };

  render() {
    console.log(this.state.price);
    // filter
    const filterMake = this.state.posts.filter((el) => {
      if (this.state.make) {
        return el.make.id == this.state.make;
      } else {
        return el.make.id !== "";
      }
    });

    // const price = this.state.price ? JSON.parse(this.state.price);
    // console.log(typeof price);
    // console.log(price.max);

    const filterPrice = filterMake.filter((el) => {
      if (this.state.price) {
        console.log(
          JSON.parse(this.state.price).min,
          el.price,
          JSON.parse(this.state.price).max
        );
        return (
          JSON.parse(this.state.price).min < el.price &&
          el.price < JSON.parse(this.state.price).max
        );
      } else {
        return el.price;
      }
    });

    const filterCondition = filterPrice.filter((el) => {
      if (this.state.checkedConditions.length > 0) {
        return this.state.checkedConditions.find(
          (id) => el.condition.id === id
        );
      } else {
        return el.condition.id !== "";
      }
    });

    const filterLocation = filterCondition.filter((el) => {
      if (this.state.checkedLocation.length > 0) {
        return this.state.checkedLocation.find((id) => el.location.id === id);
      } else {
        return el.location.id !== "";
      }
    });

    const filter = filterLocation.filter((el) => {
      if (this.state.checkedFuel.length > 0) {
        return this.state.checkedFuel.find((id) => el.fuel.id === id);
      } else {
        return el.fuel.id !== "";
      }
    });

    // pagination
    const noOfPages = Math.ceil(filter.length / this.state.itemsPerPage);
    const indexOfLast = this.state.page * this.state.itemsPerPage;
    const indexOfFirst = indexOfLast - this.state.itemsPerPage;
    const currentItems = filter.slice(indexOfFirst, indexOfLast);
    return (
      <React.Fragment>
        <Navbar />

        <div className="container-fluid home-page p-0">
          <div className="row m-0">
            <div className="filter-bar">
              <Filterbar
                makeAcco={this.state.makeAcco}
                modalAcco={this.state.modalAcco}
                priceAcco={this.state.priceAcco}
                locationAcco={this.state.locationAcco}
                conditionAcco={this.state.conditionAcco}
                fuelAcco={this.state.fuelAcco}
                checkedConditions={this.state.checkedConditions}
                checkedLocation={this.state.checkedLocation}
                checkedFuel={this.state.checkedFuel}
                handleCheckboxes={this.handleCheckboxes}
                handleAccordian={this.handleAccordian}
                make={this.state.make}
                price={this.state.price}
                handleChange={this.handleChange}
              />

              <Drawer
                anchor={"left"}
                open={this.state.leftDrawer}
                onClose={this.toggleDrawer(false)}
              >
                <FilterMobile />
              </Drawer>
            </div>
            <div className="content">
              <div className="sort-result-div">
                <i
                  className="fas fa-filter show-filter-menu-btn"
                  onClick={this.toggleDrawer(true)}
                >
                  <span style={{ fontFamily: "Roboto", cursor: "pointer" }}>
                    Filter
                  </span>
                </i>
                <p className="post-results d-inline-block">
                  {filter.length > 0
                    ? `Showing ${indexOfFirst + 1} - ${
                        indexOfFirst + currentItems.length
                      } out of ${filter.length} posts`
                    : "No Posts"}
                </p>
                <div className="sort-by-div">
                  <FormControl className="post-sort-by">
                    <InputLabel id="demo-simple-select-label">
                      Sort By
                    </InputLabel>
                    <Select value={this.state.sort} onChange={this.handleSort}>
                      <MenuItem className="sort-value" value="latest" selected>
                        Latest First
                      </MenuItem>
                      <MenuItem className="sort-value" value="oldest">
                        Oldest First
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <Post posts={currentItems} />

              <div className="row m-0">
                <div className="col p-0">
                  <div className="pagination-div">
                    {noOfPages > 1 ? (
                      <Pagination
                        count={noOfPages}
                        page={this.state.page}
                        onChange={this.handlePagination}
                        className="pagi"
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}
