import React, { Component } from "react";

class Furniture extends Component {
  render() {
    const { index, image, name, brand, price, priceSale } = this.props;
    console.log (this.props)
    return (
      <ul>
    <li key={index}>
          <img alt={name} src={image} />
          <p>Name: {name}</p>
          <p>Brand: {brand}</p>
          <div>Price: {price}€</div>
          <div>Price Sale: {priceSale}€</div>
        </li>
      </ul>
    );
  }
}

export default Furniture;
