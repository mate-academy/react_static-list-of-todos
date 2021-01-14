import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';
import { Todo } from '../Todo';
import { TodoTypes } from '../../types';

import './TodoList.scss';

export const TodoList = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map(item => (
      <li key={item.id} className="list__item">
        <User user={item} />
        <Todo todo={item} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(TodoTypes).isRequired,
};
