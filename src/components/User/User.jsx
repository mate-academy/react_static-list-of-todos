import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ user }) => {
  const { name } = user;

  return (
    <h3 className="name">{name}</h3>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    address: PropTypes.shape({}),
    company: PropTypes.shape({}),
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.string,
    username: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
};
