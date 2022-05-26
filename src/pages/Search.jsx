import React from 'react';
import PropTypes from 'prop-types';
import Products from '../components/Products';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ListCategories from '../components/ListCategories';
import './Search.css';

class Search extends React.Component {
  state = {
    valueInput: '',
    productList: [],
    category: [],
    prodListCategory: [],
    carrinhoProdList: [],
  }

  async componentDidMount() {
    const showCategories = await getCategories();
    this.setState({ category: showCategories });
  }

  addProduct = ({ target }) => {
    const { value, name } = target;
    const quantity = 1;
    this.setState((prev) => ({
      carrinhoProdList: [...prev.carrinhoProdList, { name, value, quantity }] }),
    () => {
      const { carrinhoProdList } = this.state;
      localStorage.setItem('carrinho', JSON.stringify(carrinhoProdList));
    });
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

    handleChangeCategory = async ({ target }) => {
      const { value } = target;
      const itensPorCategoria = await getProductsFromCategoryAndQuery(value);
      this.setState({ prodListCategory: itensPorCategoria.results });
    }

    render() {
      const { valueInput, productList, category, prodListCategory } = this.state;
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
          <button
            type="button"
            data-testid="shopping-cart-button"
            onClick={ this.redirectCarrinho }
          >
            Carrinho de compras

          </button>

          <h1>Categoria:</h1>
          <div className="container-categorias-produtos">
            <fieldset className="categorias">
              {category.map((item) => (
                <ListCategories
                  key={ item.id }
                  category="category"
                  handleChangeCategory={ this.handleChangeCategory }
                  value={ item.id }
                  nome={ item.name }
                />
              ))}
            </fieldset>

            <div className="lista-de-produtos">
              {
                prodListCategory.map((item) => (
                  <div
                    className="produto"
                    key={ item.id }
                  >
                    <Products
                      key={ item.id }
                      name={ item.title }
                      imagem={ item.thumbnail }
                      price={ item.price }
                    />
                    <button
                      data-testid="product-add-to-cart"
                      type="submit"
                      name={ item.title }
                      value={ item.price }
                      onClick={ this.addProduct }
                    >
                      Adicionar ao carrinho
                    </button>

                  </div>
                ))
              }
            </div>
          </div>
        </div>
      );
    }
}

export default Search;

Search.defaultProps = {
  history: {},
};
Search.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
};
