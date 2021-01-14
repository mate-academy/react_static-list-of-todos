import React from 'react';
import { checkPropTypesUser } from '../checkPropTypes/checkPropTypesUser';

export const User = ({ name }) => (
  <p className="list__name">
    <span>Name: </span>
    {name}
  </p>
);

User.propTypes = checkPropTypesUser;
