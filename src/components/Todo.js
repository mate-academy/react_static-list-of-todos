import React from 'react';
import './Todo.css';
import PropTypes from 'prop-types';
import User from './User';

const doneElement = (
  <span className="todo__item-completed--done">
    Done
  </span>
);
const inProcessElement = (
  <span className="todo__item-completed--inprocess">
    In process
  </span>
);

function Todo({ title, completed, user }) {
  return (
    <li className="todo__item">
      <h2 className="todo__item-title">
        {title}
      </h2>
      <User {...user} />
      <div className="todo__item-completed">
        {completed ? doneElement : inProcessElement}
      </div>
    </li>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.bool.isRequired,
    email: PropTypes.bool.isRequired,
  })).isRequired,
};

export default Todo;
