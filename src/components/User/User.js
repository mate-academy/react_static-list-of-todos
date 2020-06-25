import React from 'react';
import { UserShape } from '../../shapes';
import './User.css';

export const User = ({ name }) => (
  <p className="item__name">{name}</p>
);

User.propTypes = UserShape.isRequired;
