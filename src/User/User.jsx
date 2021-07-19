import React from 'react';
import './User.scss';
import { template } from '../objFit';

export const User = ({ user }) => (
  <span className="username">{user.name}</span>
);

User.propTypes = {
  user: template,
}.isRequired;
