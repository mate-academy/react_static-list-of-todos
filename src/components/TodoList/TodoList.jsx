import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import './todoList.scss';
import { TodoType } from '../../types';

export const TodoList = ({ todos }) => (
  <div className="todoList justified">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoType),
};

TodoList.defaultProps = {
  todos: [],
};
