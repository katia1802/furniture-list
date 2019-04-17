import React, { Fragment, Component } from "react";
import GoBack from "../GoBack";
import './FurnitureCard.scss'

class FurnitureCard extends Component {
  render() {
    const { furnitureRawData} = this.props;
    const furnitureId = this.props.match.params.id;
    if (
      furnitureRawData.length === 0 
      ||
      furnitureId >= furnitureRawData.length
    ) {
      return <div>No Data</div>;
    } else {
      const furnitureSelected = furnitureRawData[furnitureId];
      // const image = furnitureSelected.image;
      // const name = furnitureSelected.name;
      // const brand = furnitureSelected.brand;
      // const price = furnitureSelected.price;
      // const priceSale = furnitureSelected.priceSale;
      const {image, name, brand, priceSale, price} = furnitureSelected
      
      return (
        <Fragment>
          <div className="furnitureSelected">

          <img className="furnitureSelected-image" 
          alt={name} 
          src={image}
           />
          <div className="furnitureSelected-info">
            <div className="furnitureSelected-names">
              <p className="furnitureSelected-name">{name}</p>
              <p className="furnitureSelected-brand">{brand}</p>
            </div>
            <div className="furnitureSelected-prices">
              <div className="furnitureSelected-final-price">{priceSale}€</div>
              <div className="furnitureSelected-price-before">
                before: {price}€
              </div>
            </div>
          </div>
          <GoBack />
          </div>

        </Fragment>
      );
    }
  }
}

export default FurnitureCard;
