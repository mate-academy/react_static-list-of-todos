import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import { TodoShape } from '../../shapes/TodoShapes';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <ul className="todolist">
    {todos.map(todo => (
      <Todo {...todo} key={todo.id} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoShape).isRequired,
};
