import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Products from '../components/Products';

class ListCategories extends React.Component {
    state = {
      category: [],
      prodList: [],
    }

    async componentDidMount() {
      const showCategories = await getCategories();
      this.setState({ category: showCategories });
    }

    handleChange = async ({ target }) => {
      const { value } = target;
      const itensPorCategoria = await getProductsFromCategoryAndQuery(value);
      this.setState({ prodList: itensPorCategoria.results });
    }

    render() {
      const { category, prodList } = this.state;
      return (
        <div>
          <fieldset>
            <h1>Categoria:</h1>
            {category.map((item) => (
              <label key={ item.name } htmlFor="category">
                <input
                  id="category"
                  type="radio"
                  name="category"
                  data-testid="category"
                  onChange={ this.handleChange }
                  value={ item.id }
                />
                { item.name }
              </label>
            ))}
          </fieldset>
          <div>
            {
              prodList.map((item) => (
                <Products
                  key={ item.id }
                  name={ item.title }
                  imagem={ item.thumbnail }
                  price={ item.price }
                />
              ))
            }
          </div>
        </div>
      );
    }
}

export default ListCategories;
