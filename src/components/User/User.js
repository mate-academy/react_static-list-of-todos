import React from 'react';
import './User.scss';

import { UserShape } from '../shapes/UserShape';

export const User = ({ name }) => (
  <div className="user">
    <p className="user__name">{name}</p>
  </div>
);

User.propTypes = UserShape;

User.defaultProps = {
  name: 'Unknown user',
};
