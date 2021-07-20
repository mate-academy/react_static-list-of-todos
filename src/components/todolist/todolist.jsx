import React from 'react';
import PropTypes from 'prop-types';
import { TodoListType } from '../../types/type';
import { Todo } from '../todo';
import './todolist.scss';

export const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id} className="task-item">
        <Todo todo={todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = PropTypes.arrayOf(TodoListType).isRequired;
