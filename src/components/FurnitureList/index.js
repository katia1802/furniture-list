import React, { Component } from "react";
import "./FurnitureList.scss";
import Furniture from "../Furniture";
import { Link } from "react-router-dom";

class FurnitureList extends Component {
  render() {
    const { furnitureResults } = this.props;

    if (furnitureResults.length === 0) {
      return <div>No data found</div>;
    } else {
      return (
        <ul className="furniture-list" >
          {furnitureResults.map(furniture => {
            // console.log ('furniture', furniture)
            return (
              <li className="furniture-item glowButton" key={furniture.id}>
                <Link
                  className="furniture-link"
                  to={`/furniture/${furniture.id}`}
                >
                  <Furniture
                    id={furniture.id}
                    image={furniture.image}
                    name={furniture.name}
                    brand={furniture.brand}
                    price={furniture.price}
                    priceSale={furniture.priceSale}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      );
    }
  }
}

export default FurnitureList;
