import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
import { Todo } from '../Todo/Todo';

export function TodoList({ Todos }) {
  return (
    <section className="users">
      <h1 className="users-title">Todos list</h1>
      {Todos.map(todo => (
        <div className="users-info" key={todo.id}>
          <Todo {...todo} />
        </div>
      ))}
    </section>
  );
}

TodoList.propTypes = {
  Todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
