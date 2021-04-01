import React from 'react';
import propTypes from 'prop-types';
import './user.scss';

export const User = ({ name }) => (
  <>
    <h2 className="name">{name}</h2>
  </>
);

User.propTypes = {
  name: propTypes.string.isRequired,
};
