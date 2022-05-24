import React from 'react';

class Search extends React.Component {
    state = {
      valueInput: '',
    }

    handleChange = ({ target }) => {
      const { name, value } = target;
      this.setState({
        [name]: value,
      });
    }

    render() {
      const { valueInput } = this.state;
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
          { verificaInput
            && (
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>)}
        </div>
      );
    }
}

export default Search;
