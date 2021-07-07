import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../todo';
import { TodoShape } from '../shapes/TodoShape';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <div className="list">
    {todos.map(todo => (
      <Todo {...todo} key={todo.id} />
    ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoShape).isRequired,
};
