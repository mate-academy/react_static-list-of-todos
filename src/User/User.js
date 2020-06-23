import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ person }) => (
  <td className="table__person">{person.name}</td>
);

User.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
