import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './Todo.css';

const Todo = ({ title, completed, user }) => {
  const status = completed
    ? <div className="todo__item-completed--true">Completed</div>
    : <div className="todo__item-completed--false">Not completed</div>;

  return (
    <li className="todo_item">
      <h2 className="todo_item-title">{title}</h2>
      <User {...user} />
      {status}
    </li>
  );
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Todo;
