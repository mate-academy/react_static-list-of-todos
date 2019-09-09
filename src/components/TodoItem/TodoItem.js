import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './TodoItem.css';

function TodoItem({ todo }) {
  const { title, completed, user } = todo;
  return (
    <li className={completed ? "card green_bg" : "card red_bg"}>
      <div>
        <User data={user} />
      </div>
      <p className="card-text">{title}</p>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number,
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
    }).isRequired,
  }).isRequired,
};


export default TodoItem;