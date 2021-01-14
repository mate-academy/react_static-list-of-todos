import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import { typeTodos } from '../Types/typeTodos';

export const TodoList = ({ todos }) => (
  <ul className="list">
    {todos.map(todo => (
      <Todo {...todo} key={todo.id} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(typeTodos).isRequired,
};
