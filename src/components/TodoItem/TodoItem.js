import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './TodoItem.css';

function TodoItem({ todo }) {
  return (
    <li className="todo__list todo-card">
      <a href="https://trello.com" className="todo-card">
        <h2>{todo.title}</h2>
        <p className="todo-list__completed">
          completed:
          <span className={`todo-list_indent ${todo.completed === false
            ? 'text-red'
            : 'text-green'}`}
          >
            {todo.completed === false ? '\u2A2F' : '\u2713'}
          </span>
        </p>

        <div className="todo-list__user">
          <User user={todo.user} />
        </div>
      </a>
    </li>
  );
}

const shape = PropTypes.shape({
  title: PropTypes.string,
  completed: PropTypes.bool,
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
});

TodoItem.propTypes = {
  todo: shape.isRequired,
};

export default TodoItem;
