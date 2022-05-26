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
      this.setState(() => {
        cartList.map((item, indexZ) => {
          if (index === indexZ) {
            console.log(item);
            item.quantity += 1;
          }
          return item;
        });
      });
    }

    decreaseQuantity = (index) => {
      const { cartList } = this.state;
      this.setState(() => {
        cartList.map((item, indexZ) => {
          if (index === indexZ) {
            console.log(item);
            item.quantity -= 1;
          }
          return item;
        });
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
                <input
                  data-testid="shopping-cart-product-quantity"
                  type="number"
                  value={ item.quantity }
                />
                <button
                  data-testid="product-decrease-quantity"
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
