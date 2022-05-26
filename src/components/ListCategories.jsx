import React from 'react';
import PropTypes from 'prop-types';

class ListCategories extends React.Component {
  render() {
    const { key, category, handleChangeCategory, value, nome } = this.props;
    return (
      <div>
        <label key={ key } htmlFor={ category }>
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

ListCategories.propTypes = {
  key: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleChangeCategory: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
};

export default ListCategories;
