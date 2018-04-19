import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Cart from './Cart';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { storeItems } from './data/StoreItems';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      storeItems,
      cart: [],
    };
  }

  addToCart(item) {
    const quantity = 1;
    const cart = [...this.state.cart];

    const doesExists = entireArray => {
      return entireArray.item.id === item.id;
    };

    if (!cart.some(doesExists)) {
      cart.push({ item, quantity });
      this.setState({ cart });
    } else {
      const itemIndex = cart.findIndex(e => e.item.id === item.id);
      cart[itemIndex].quantity = cart[itemIndex].quantity + 1;
      this.setState({ cart });
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <p>HEADER</p>
          <hr />
          <Route
            default
            exact
            path="/"
            render={props => <App {...this.state} addToCart={this.addToCart} />}
          />
          <Route path="/Cart" render={props => <Cart {...this.state} />} />
        </div>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
