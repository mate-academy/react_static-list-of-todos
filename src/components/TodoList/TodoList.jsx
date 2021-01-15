import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from '../Todo';
import { TodoTypes } from '../../types';

import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <ul>
    {todos.map(item => (
      <li key={item.id} className="list__item">
        <Todo todo={item} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoTypes).isRequired,
};
