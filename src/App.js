import React from 'react';
import './App.css';
import Item from './Item';
import { Link } from 'react-router-dom';

const App = props => {
  const { storeItems, addToCart } = props;
  return (
    <div>
      <Link to="/Cart">
        <button>Cart</button>
      </Link>

      {storeItems.map((item, index) => (
        <Item key={index} details={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default App;
