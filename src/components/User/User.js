import React from 'react';
import { userShape } from '../../shapes';
import './User.css';

export const User = ({ name }) => (
  <p className="item__name">{name}</p>
);

User.propTypes = userShape.isRequired;
