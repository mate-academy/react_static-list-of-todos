import React from 'react';
import { TypesOfTodoList } from '../../types/type';
import './user.scss';

export const User = ({ task }) => (
  <p className="user-name">
    <i>{task.user}</i>
  </p>
);

User.propTypes = TypesOfTodoList.isRequired;
