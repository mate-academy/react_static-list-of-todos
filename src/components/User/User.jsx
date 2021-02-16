import React from 'react';
import { userType } from '../propTypes/userType';

export const User = ({ name }) => (
  <div>{name}</div>
);

User.propTypes = userType.isRequired;
