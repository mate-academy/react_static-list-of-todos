import React from 'react';
import './User.scss';

import { userType } from '../../propTypes/userType';

export const User = ({ name }) => (
  <div className="todo__user">{name}</div>
);

User.propTypes = userType.isRequired;
