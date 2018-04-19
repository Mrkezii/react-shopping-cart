import React, { Component } from 'react';

const Item = props => {
  const { details, addToCart } = props;
  return (
    <div>
      {details.name} - {details.price}
      <button onClick={() => addToCart(details)}>Add to cart</button>
    </div>
  );
};

export default Item;
