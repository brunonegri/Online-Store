import React from 'react';
import PropTypes from 'prop-types';

export default class RedAvaliacoes extends React.Component {
  render() {
    const { email, nota, comentario } = this.props;
    return (
      <div>
        <span>{ email }</span>
        <br />
        <span>{ nota }</span>
        <br />
        <span>{ comentario }</span>
      </div>
    );
  }
}

RedAvaliacoes.propTypes = {
  email: PropTypes.string.isRequired,
  nota: PropTypes.string.isRequired,
  comentario: PropTypes.string.isRequired,
};
