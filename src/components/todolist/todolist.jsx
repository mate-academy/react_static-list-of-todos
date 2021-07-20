import React from 'react';
import PropTypes from 'prop-types';
import { TypesOfTodoList } from '../../types/type';
import { Todo } from '../todo';
import './todolist.scss';

export const TodoList = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map(task => (
      <li key={task.id} className="task-item">
        <Todo task={task} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = PropTypes.arrayOf(TypesOfTodoList).isRequired;
