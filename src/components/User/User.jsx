import React from 'react';
import propTypes from 'prop-types';
import './User.scss';

export const User = ({ name }) => (
  <h2 className="item__name">{name}</h2>
);

User.propTypes = {
  name: propTypes.string.isRequired,
};
