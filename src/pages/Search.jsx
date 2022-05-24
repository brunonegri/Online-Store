import React from 'react';
import Products from '../components/Products';
import { getProductsFromCategoryAndQuery } from '../services/api';
import PropTypes from 'prop-types';


class Search extends React.Component {
    state = {
      valueInput: '',
      productList: [],
    //   stateRedirect: false,
    }

    redirectCarrinho = () => {
      const { history } = this.props;
      history.push('carrinho');
    }

    handleChange = ({ target }) => {
      const { name, value } = target;
      this.setState({
        [name]: value,
      });
    }

    handleBtnClick = async () => {
      const { valueInput } = this.state;
      const response = await getProductsFromCategoryAndQuery('', valueInput);
      const { results } = response;
      this.setState({
        productList: results,
      });
      // console.log(results);
    }

    render() {
      const { valueInput, productList } = this.state;
      const verificaInput = valueInput < 1;

      return (
        <div>
          <label htmlFor="search">
            <input
              data-testid="query-input"
              name="valueInput"
              type="text"
              id="search"
              onChange={ this.handleChange }
              value={ valueInput }
            />
          </label>
          <button
            onClick={ this.handleBtnClick }
            type="button"
            data-testid="query-button"
          >
            Pesquisar
          </button>

          { verificaInput
            && (
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>)}
          <div>
            {productList.map((produto) => (
              <Products
                key={ produto.id }
                name={ produto.title }
                imagem={ produto.thumbnail }
                price={ produto.price }
              />))}
          </div>
              </p>
            )}
          <button
            type="button"
            data-testid="shopping-cart-button"
            onClick={ this.redirectCarrinho }
          >
            Carrinho de compras

          </button>
        </div>
      );
    }
}

export default Search;

Search.propTypes = {
  history: PropTypes.string.isRequired,
};
