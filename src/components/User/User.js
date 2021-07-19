import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ user }) => (
  <p>{`name: ${user.name}`}</p>
);

export const TypeUser = PropTypes.shape({
  name: PropTypes.string.isRequired,
});

User.propTypes = {
  user: TypeUser.isRequired,
};
