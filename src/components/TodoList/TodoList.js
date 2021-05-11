import React from 'react';
import PropTypes from 'prop-types';

import './TodoList.scss';

import { Todo } from '../Todo/Todo';
import { User } from '../User/User';

import UserType from '../../types';

export const TodoList = ({ todos, users }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li className="todo" key={todo.id}>
        <User {...users.find(user => (user.id === todo.userId))} />
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(UserType).isRequired,
  users: PropTypes.arrayOf(UserType).isRequired,
};
