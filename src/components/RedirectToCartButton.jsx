import React from 'react';
import { Link } from 'react-router-dom';

class RedirectToCartButton extends React.Component {
  render() {
    return (
      <Link to="/carrinho">
        <button
          type="button"
          data-testid="shopping-cart-button"
        >
          Carrinho de compras
        </button>
      </Link>
    );
  }
}

export default RedirectToCartButton;
