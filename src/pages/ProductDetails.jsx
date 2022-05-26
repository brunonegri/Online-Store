import React from 'react';
import PropTypes from 'prop-types';
import getProductsDetailsByID from '../services/api';<<<<<<< main-group-24-req-9
import AddToCartButton from '../components/AddToCartButton';
import RedirectToCartButton from '../components/RedirectToCartButton';
import RedAvaliacoes from '../components/RedAvaliacoes';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: '',
      email: '',
      nota: '',
      comentario: '',

      avaliacoes: [],
    };
  }

  componentDidMount() {
    this.getProductsDetailsByID();
    // const { product } = this.state;
    const { match: { params: { id } } } = this.props;
    const avalia = localStorage.getItem({ id });
    if (avalia) {
      this.setState({ avaliacoes: JSON.parse(avalia) });
    }
  }

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = (event) => {
    const { email, nota, comentario } = this.state;
    const { match: { params: { id } } } = this.props;
    event.preventDefault();
    this.setState((prev) => ({
      avaliacoes: [...prev.avaliacoes, {
        email,
        nota,
        comentario,
      }] }),
    () => {
      const { avaliacoes } = this.state;
      localStorage.setItem({ id }, JSON.stringify(avaliacoes));
    });
  }
  // console.log(typeof id);

  getProductsDetailsByID = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getProductsDetailsByID(id);
    this.setState({ product });
  }

  render() {
    const { product, avaliacoes } = this.state;
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
        <div>
          <h2 data-testid="product-detail-name">{ title }</h2>
          <img src={ thumbnail } alt={ title } />
          <p>
            Preço:
            { price }
          </p>
        </div>
        <fieldset>
          <legend>Deixe sua avaliação:</legend>
          <form>
            <label
              htmlFor="email"
            >
              Email:
              <input
                data-testid="product-detail-email"
                type="email"
                name="email"
                onChange={ this.handleChangeForm }

              />
            </label>
            <br />
            <label htmlFor="nota">
              1
              <input
                data-testid="1-rating"
                type="radio"
                name="nota"
                value="1"
                onClick={ this.handleChangeForm }
              />
              2
              <input
                data-testid="2-rating"
                type="radio"
                name="nota"
                value="2"
                onClick={ this.handleChangeForm }
              />
              3
              <input
                data-testid="3-rating"
                type="radio"
                name="nota"
                value="3"
                onClick={ this.handleChangeForm }
              />
              4
              <input
                data-testid="4-rating"
                type="radio"
                name="nota"
                value="4"
                onClick={ this.handleChangeForm }
              />
              5
              <input
                data-testid="5-rating"
                type="radio"
                name="nota"
                value="5"
                onClick={ this.handleChangeForm }
              />
            </label>

            <br />
            <label htmlFor="comentario">
              Comentário:
              <textarea
                name="comentario"
                rows="4"
                cols="50"
                data-testid="product-detail-evaluation"
                placeholder="Nos conte o que achou do produto"
                onChange={ this.handleChangeForm }
              />
            </label>
            <br />
            <button
              data-testid="submit-review-btn"
              type="submit"
              value={ title }
              onClick={ this.handleClick }
            >
              Enviar

            </button>
          </form>
        </fieldset>
        <fieldset>
          <legend>Avaliações</legend>
          <div>
            {
              avaliacoes.map((item) => (
                <RedAvaliacoes
                  key={ item.email }
                  email={ item.email }
                  nota={ item.nota }
                  comentario={ item.comentario }
                />
              ))
            }
          </div>
        </fieldset>
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
