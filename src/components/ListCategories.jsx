import React from 'react';
import PropTypes from 'prop-types';

class ListCategories extends React.Component {
  render() {
    const { category, handleChangeCategory, value, nome } = this.props;
    return (
      <div>
        <label htmlFor={ category }>
          <input
            id={ category }
            type="radio"
            name={ category }
            data-testid={ category }
            onChange={ handleChangeCategory }
            value={ value }
          />
          { nome }
        </label>
      </div>
    );
  }
}
export default ListCategories;
ListCategories.propTypes = {
  category: PropTypes.string.isRequired,
  handleChangeCategory: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
};
