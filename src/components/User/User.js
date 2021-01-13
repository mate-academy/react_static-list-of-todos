import React from 'react';
import { UserType } from '../Types';

export const User = ({ name }) => (
  <span className="todo-list__user">
    by
    {' '}
    {name}
  </span>
);

User.propTypes = UserType.isRequired;
