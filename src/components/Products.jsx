import React from 'react';
import PropTypes from 'prop-types';

class Products extends React.Component {
  render() {
    const { name, imagem, price } = this.props;
    return (
      <div data-testid="product">
        <p>{name}</p>
        <img alt={ name } src={ imagem } />
        <p>{price}</p>
      </div>);
  }
}

Products.propTypes = {
  name: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Products;
