import React from 'react';

export default class Carrinho extends React.Component {
    state = {
      cartList: [],
    }

    componentDidMount() {
      const cartList = localStorage.getItem('carrinho');
      if (cartList) {
        this.setState({ cartList: JSON.parse(cartList) });
      }
      // console.log(cartList);
    }

    increaseQuantity = (index) => {
      const { cartList } = this.state;
      this.setState({
        cartList: cartList.map((item, indexZ) => {
          if (index === indexZ) {
            const sum = Number(item.quantity) + 1;
            const objItem = {
              name: item.name,
              quantity: String(sum),
              value: item.value,
            };
            return objItem;
          }
          return item;
        }),
      });
    }

    decreaseQuantity = (index) => {
      const { cartList } = this.state;
      this.setState({
        cartList: cartList.map((item, indexZ) => {
          if (index === indexZ) {
            const obj = {
              name: item.name,
              quantity: String(item.quantity - 1),
              value: item.value,
            };
            return obj;
          }
          return item;
        }),
      });
    }

    render() {
      const { cartList } = this.state;
      return (
        <div>
          <h1>Carrinho de Compras</h1>
          {(cartList.length === 0) && (
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          )}
          <div>
            {cartList.map((item, index) => (
              <div
                key={ index }
              >
                <p data-testid="shopping-cart-product-name">{item.name}</p>
                <p>{item.value}</p>
                <button
                  name={ item.name }
                  onClick={ () => this.increaseQuantity(index) }
                  data-testid="product-increase-quantity"
                  type="button"
                >
                  +
                </button>
                <span min="1" data-testid="shopping-cart-product-quantity">
                  { item.quantity }
                </span>
                <button
                  data-testid="product-decrease-quantity"
                  disabled={ item.quantity <= 1 }
                  onClick={ () => this.decreaseQuantity(index) }
                  type="button"
                >
                  -
                </button>
              </div>
            ))}

          </div>

        </div>
      );
    }
}
