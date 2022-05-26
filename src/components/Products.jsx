import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Products extends React.Component {
  render() {
    const { name, imagem, price, keys } = this.props;
    return (
      <div data-testid="product">
        <Link to={ `/products/${keys}` } data-testid="product-detail-link">
          <p>
            { name }
          </p>
          <img alt={ name } src={ imagem } />
          <p>
            Preço: R$
            { price }
          </p>
          Ver Detalhes
        </Link>
      </div>);
  }
}

Products.propTypes = {
  name: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  keys: PropTypes.string.isRequired,
};

export default Products;
