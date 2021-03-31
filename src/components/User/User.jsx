import React from 'react';
import './User.scss';

export const User = ({ name }) => (
  <div className="user">
    <h3>{name}</h3>
  </div>
);