import React from 'react';
import PropTypes from 'prop-types';
import { PreparedTodosType } from '../../types/PreparedTodosTypes';
import { Todo } from '../Todo';
import './TodoList.scss';

export const TodoList = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map(task => (
      <li key={task.id} className="point">
        <Todo task={task} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = PropTypes.arrayOf(PreparedTodosType).isRequired;
