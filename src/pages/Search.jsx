import React from 'react';

class Search extends React.Component {
    state = {
      valueInput: '',
    }

    render() {
      const { valueInput } = this.state;
      const verificaInput = valueInput < 1;
      return (
        <div>
          <label htmlFor="search">
            <input type="text" id="search" value={ valueInput } />
          </label>
          { verificaInput ? 
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            : ''}
        </div>
      );
    }
}

export default Search;
