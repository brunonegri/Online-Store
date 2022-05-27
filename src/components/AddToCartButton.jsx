import React from 'react';
import PropTypes from 'prop-types';
import { setLocalSt } from '../services/funcCarrinho';

class AddToCartButton extends React.Component {
  addProduct = () => {
    const { value, name } = this.props;
    const quantity = 1;
    let cartListStoraged = JSON.parse(localStorage.getItem('carrinho'));
    if (!cartListStoraged) cartListStoraged = [];
    const cartList = [...(cartListStoraged), { value, name, quantity }];
    setLocalSt(
      'carrinho',
      JSON.stringify(cartList),
    );
  };

  render() {
    const { dataTestId } = this.props;
    return (
      <button
        type="submit"
        onClick={ this.addProduct }
        data-testid={ dataTestId }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

export default AddToCartButton;
AddToCartButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
