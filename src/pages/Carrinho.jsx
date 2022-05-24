import React from 'react';

export default class Carrinho extends React.Component {
  render() {
    return (
      <div>
        <h1>Carrinho de Compras</h1>
        <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio</p>

      </div>
    );
  }
}
