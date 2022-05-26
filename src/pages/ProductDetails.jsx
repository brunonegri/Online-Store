import React from 'react';
import PropTypes from 'prop-types';
import getProductsDetailsByID from '../services/api';
import AddToCartButton from '../components/AddToCartButton';
import RedirectToCartButton from '../components/RedirectToCartButton';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    this.getProductsDetailsByID();
  }

  getProductsDetailsByID = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getProductsDetailsByID(id);
    this.setState({ product });
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail } = product;
    return (
      <div>
        <RedirectToCartButton />
        <h2 data-testid="product-detail-name">{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>
          Preço:
          { price }
        </p>
        <AddToCartButton
          name={ title }
          value={ price }
          dataTestId="product-detail-add-to-cart"
        />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
