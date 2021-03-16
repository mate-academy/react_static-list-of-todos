import React from 'react';
import PropTypes from 'prop-types';
import { UserType } from '../types';

export const User = ({ userName }) => (
  (
    <h2>{userName.name}</h2>
  )
);

User.propTypes = {
  userName: PropTypes.arrayOf(UserType).isRequired,
};
