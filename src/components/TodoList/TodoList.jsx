import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import allTypes from '../../types';

import './TodoList.scss';

export const TodoList = ({ todoItems }) => (
  <ul className="todo-list">
    {todoItems.map(item => (
      <li key={item.id}>
        <Todo {...item} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = PropTypes.arrayOf(allTypes.todoType).isRequired;
