import React, { Component } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Divider,
} from "@material-ui/core";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

export default class Filterbar extends Component {
  state = {
    // get all filters
    materials: ["canvas", "Art Boards", "Oil Paintings"],
    sizes: [
      {
        id: 1,
        size: 'Mini (e.g. 8" x 10")',
      },
      {
        id: 2,
        size: 'Small (e.g 12" x 18")',
      },
      {
        id: 3,
        size: 'Medium (e.g 18" x 24")',
      },
      {
        id: 4,
        size: 'Large (e.g 24" x 36")',
      },
      {
        id: 5,
        size: 'Oversized (e.g 36" x 48")',
      },
      {
        id: 6,
        size: 'Giant (e.g 48" x 64")',
      },
      {
        id: 7,
        size: "Custom",
      },
    ],

    price: { min: 0, max: 50000 },
  };

  handleSize = () => {};
  render() {
    return (
      <React.Fragment>
        <div className="fixed-div">
          <Typography variant="h6" className="filter-title">
            Materials
          </Typography>
          <List className="filter-list">
            {this.state.materials.map((material) => {
              const labelId = `${material}`;

              return (
                <ListItem
                  key={material}
                  role={undefined}
                  dense
                  button
                  // onClick={this.props.handleMaterials(material)}
                >
                  <ListItemIcon>
                    <Checkbox
                      size="small"
                      edge="start"
                      // checked={
                      //   this.props.checkedMaterials.indexOf(material) !== -1
                      // }
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={material} />
                </ListItem>
              );
            })}
          </List>

          {/* <p className="clear-filters" onClick={this.props.handleClearFilters}>
          Clear Filters
        </p> */}

          <Divider className="filter-divider" />
          <Typography variant="h6" className="filter-title">
            Price
          </Typography>
          <InputRange
            className="age-filter"
            maxValue={50000}
            minValue={0}
            value={this.state.price}
            onChange={(value) => this.props.handleAge(value)}
          />
          <Divider className="filter-divider" />
          <Typography variant="h6" className="filter-title">
            Size
          </Typography>
          <List className="filter-list">
            {this.state.sizes.map((size) => {
              const labelId = `${size.id}`;

              return (
                <ListItem
                  key={size.id}
                  role={undefined}
                  dense
                  button
                  // onClick={this.props.handleSize(size.id)}
                >
                  <ListItemIcon>
                    <Checkbox
                      size="small"
                      edge="start"
                      // checked={
                      //   this.props.checkedEthnicities.indexOf(size.id) !== -1
                      // }
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={size.size} />
                </ListItem>
              );
            })}
          </List>
          <Divider className="filter-divider" />
        </div>
      </React.Fragment>
    );
  }
}
