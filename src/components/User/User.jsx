import React from 'react';
import { UserType } from '../propTypes/UserType';

export const User = ({ name }) => (
  <div className="user-name">
    <span>{ name }</span>
  </div>
);

User.propTypes = UserType;
