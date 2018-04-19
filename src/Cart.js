import React, { Component } from 'react';
import App from './App';
import { Link } from 'react-router-dom';

const Cart = props => {
  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>
      {!props.cart.length ? (
        <p>Empty Cart</p>
      ) : (
        props.cart.map((item, index) => (
          <p key={index}>
            {item.item.name} - {item.quantity}
            - Total Price - N{item.quantity * item.item.price}
          </p>
        ))
      )}{' '}
      GRAND ={' '}
      {props.cart
        .map(item => item.quantity * item.item.price)
        .reduce((p, n) => p + n, 0)}
    </div>
  );
};

export default Cart;
