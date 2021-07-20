import React from 'react';
import { TodoListType } from '../../types/type';
import './user.scss';

export const User = ({ todo }) => (
  <p className="user-name">
    <i>{`User: ${todo.name}`}</i>
  </p>
);

User.propTypes = TodoListType.isRequired;
