import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
import { Todo } from '../Todo/Todo';

export function TodoList({ todos }) {
  return (
    <section className="users">
      <h1 className="users-title">Todos list</h1>
      {todos.map(todo => (
        <Todo {...todo} key={todo.id} />
      ))}
    </section>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
