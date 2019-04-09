import React, { Component } from "react";
import "./FurnitureList.scss";
import GoBack from "../GoBack";
import Furniture from '../Furniture'

class FurnitureList extends Component {
  render() {
    const { furnitureResults } = this.props;
    if (furnitureResults.length === 0) {
      return (
        <div>
          <GoBack />

        </div>
      );
    } else {
      return (
        <div>
          {furnitureResults.map((furniture, index) => {
                return (
                  <Furniture 
                  index = {index}
                  image = {furniture.image}
                  name = {furniture.name}
                  brand = {furniture.brand}
                  price = {furniture.price}
                  priceSale = {furniture.priceSale}
                  />)
          })}
        </div>
      );
    }
  }
}

export default FurnitureList;
