import React, { Component, Fragment } from "react";
import "./Furniture.scss";

class Furniture extends Component {
  render() {
    const { image, name, brand, price, priceSale } = this.props;
    // console.log('this.props', this.props);
    return (
      <Fragment>
        <img className="furniture-image" alt={name} src={image} />
        <div className="furniture-info">
          <div className="furniture-names">
            <p className="furniture-name">{name}</p>
            <p className="furniture-brand">{brand}</p>
          </div>
          <div className="furniture-prices">
            <div className="furniture-final-price">{priceSale}€</div>
            <div className="furniture-price-before"> before {price}€</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Furniture;
