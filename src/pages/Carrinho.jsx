import React from 'react';
import { getLocalSt } from '../services/funcCarrinho';

export default class Carrinho extends React.Component {
    state = {
      cartList: [],
    }

    componentDidMount() {
      const cartList = getLocalSt('carrinho');
      if (cartList) {
        this.setState({ cartList: JSON.parse(cartList) });
      }
    }

    render() {
      const { cartList } = this.state;
      return (
        <div>
          <h1>Carrinho de Compras</h1>
          {(cartList.length === 0)
            && <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}

          <div>
            {cartList.map((item) => (
              <div
                key={ item.name }
              >
                <p data-testid="shopping-cart-product-name">{item.name}</p>
                <p>{item.value}</p>
                <p data-testid="shopping-cart-product-quantity">{item.quantity}</p>
              </div>
            ))}
          </div>

        </div>
      );
    }
}
