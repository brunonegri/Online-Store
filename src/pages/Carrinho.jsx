import React from 'react';

export default class Carrinho extends React.Component {
    state = {
      cartList: [],
    }

    render() {
      const { cartList } = this.state;
      return (
        <div>
          <h1>Carrinho de Compras</h1>
          {(cartList.length === 0) && (
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          )}

        </div>
      );
    }
}
