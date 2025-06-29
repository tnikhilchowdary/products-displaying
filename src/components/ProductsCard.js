import '../App.css';
import React from "react";



const ProductsCard = ({ image, name, price, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p className="price">${price}</p>
      <p className="desc">{description}</p>
    </div>
  );
};

export default ProductsCard;
