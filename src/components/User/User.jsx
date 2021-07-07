import React from 'react';
import { UserType } from '../../types';
import './User.scss';

export const User = ({ name }) => (
  <p className="user">{name}</p>
);

User.propTypes = UserType.isRequired;
