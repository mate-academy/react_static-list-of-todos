import React from 'react';
import './TodoList.scss';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import { todoShape } from '../propTypes/todoShape';

export const TodoList = ({ todos }) => (
  <ul className="todoList">
    {todos.map(todoItem => <li key={todoItem.id}><Todo todo={todoItem} /></li>)}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(todoShape).isRequired,
};
