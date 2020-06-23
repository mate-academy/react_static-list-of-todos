import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

export const Todo = ({ user, id, title, completed }) => (
  <div className="todo__item">
    <small style={{ color: completed ? 'green' : 'red' }}>
      {completed ? 'done' : 'not done'}
    </small>
    <p><b>{`${id}. ${title}`}</b></p>
    <small>
      <br />
      {`For: ${user.name}`}
    </small>
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};
