import React from 'react';
import PropTypes from 'prop-types';
import './ToDoList.scss';
import { ToDo } from '../ToDo';

export function ToDoList({ usersTodo }) {
  return (
    <section className="users">
      <h1 className="users-title">Todos list</h1>
      {usersTodo.map(todo => (
        <div className="users-info" key={todo.id}>
          <ToDo {...todo} />
        </div>
      ))}
    </section>
  );
}

ToDoList.propTypes = {
  usersTodo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
