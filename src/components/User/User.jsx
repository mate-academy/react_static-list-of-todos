import React from 'react';
import './User.scss';
import UserTypes from '../Type/Type';

export const User = ({ name }) => (
  <span className="table__name">{name}</span>
);

User.propTypes = UserTypes;
