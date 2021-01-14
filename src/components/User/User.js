import React from 'react';
import { typeUser } from '../Types/typeTodos';

export const User = ({ name }) => (
  <p className="list__name">
    <span>Name: </span>
    {name}
  </p>
);

User.propTypes = typeUser;
