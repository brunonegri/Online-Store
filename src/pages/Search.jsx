import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
    state = {
      valueInput: '',
    //   stateRedirect: false,
    }

    redirectCarrinho = () => {
      const { history } = this.props;
      history.push('carrinho');
    }

    render() {
      const { valueInput } = this.state;
      const verificaInput = valueInput < 1;

      return (
        <div>
          <label htmlFor="search">
            <input type="text" id="search" value={ valueInput } />
          </label>
          { verificaInput
            && (
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            )}
          <button
            type="button"
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
