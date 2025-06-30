import React from "react";
import products from "./Data";
import ProductsCard from "./ProductsCard";
import './Home.css';

const Home = ({ search }) => {
    const filteredproducts = products.filter((product) => 
        product.name && product.name.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <div className="product-grid">
      {filteredproducts.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
