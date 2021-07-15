import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import { User } from '../User';
import './TodoList.scss';

export const TodoList = ({ todos, users }) => (
  <div className="todo">
    {todos.map(todo => (
      <div
        key={todo.id}
        className={`todo__item ${todo.completed ? 'complete' : ''}`}
      >
        <Todo {...todo} />
        <User {...users.find(item => item.id === todo.userId)} />
      </div>
    ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      userId: PropTypes.number.isRequired,
    }),
  ).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
