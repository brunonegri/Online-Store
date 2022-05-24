import React from 'react';
import { getCategories } from '../services/api';

class ListCategories extends React.Component {
    state = {
      category: [],
    }

    async componentDidMount() {
      const showCategories = await getCategories();
      console.log(showCategories);
      this.setState({ category: showCategories });
    }

    render() {
      const { category } = this.state;
      return (
        <fieldset>
          <h1>Categoria:</h1>
          {category.map(({ name }) => (
            <label key={ name } htmlFor="category">
              <input type="radio" name="category" data-testid="category" />
              { name }
            </label>
          ))}
        </fieldset>
      );
    }
}

export default ListCategories;
