import react from "react";
import './ProductCards.css'; 

const ProductsCard = ({ product }) => {
  const { id, image, name, description, price } = product;
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h3>${price}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductsCard;
