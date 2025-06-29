// src/App.js
import React from 'react';
import ProductsCard from './components/ProductsCard';
import products from './components/Data';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductsCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
