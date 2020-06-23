import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

export const Todo = ({ user, id, title, completed }) => (
  <div className="todo__item">
    <h3>{`${id}. ${title}`}</h3>
    <small>
      {completed ? 'done' : 'not done'}
    </small>
    <span>
      <br />
      For:
      {user.name}
    </span>
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};
