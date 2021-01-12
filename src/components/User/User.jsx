import React from 'react';
import './User.scss';

export const User = ({ ...todoOfUser }) => (
  <p className="user">{todoOfUser.name}</p>
);
