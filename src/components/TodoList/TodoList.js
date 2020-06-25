import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import { TodoShape } from '../../shapes';

export const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li className="todo" key={todo.id}>
        <Todo todo={todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoShape).isRequired,
};
