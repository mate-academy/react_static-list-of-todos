import React from 'react';

import './User.scss';
import { userProptype } from '../propTypes/userProptype';

export const User = ({ name }) => (
  <div className="users__name">
    {name}
  </div>
);

User.propTypes = userProptype;
