import React, { Component } from "react";
import "./FurnitureList.scss";
import Furniture from "../Furniture";
import { Link } from "react-router-dom";

class FurnitureList extends Component {
  render() {
    const {furnitureResults}  = this.props;
    console.log ('furnitureResults', furnitureResults)

    if (furnitureResults.length === 0) {
      return <div>No data found</div>
    } else {
      return (
        <div className="furniture-list-container">
          {furnitureResults.map((furniture, index) => {
            return (
              <ul className="furniture-list">
                <li className="furniture-item glowButton" key={index}>
                  <Link
                    className="furniture-link"
                    to={`/furniture/${furniture.id}`}
                  >
                    <Furniture
                      // index={furniture.id}
                      image={furniture.image}
                      name={furniture.name}
                      brand={furniture.brand}
                      price={furniture.price}
                      priceSale={furniture.priceSale}
                    />
                  </Link>
                </li>
              </ul>
            );
          })}
        </div>
      );
    }
  }
}

export default FurnitureList;
