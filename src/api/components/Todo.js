import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Todo = ({ user, title, completed }) => {
  const toDo = `To-do: ${title}`;
  const complete = `Complete: ${completed.toString()}`;

  return (
    <li>
      <User user={user} />
      <p>{toDo}</p>
      <p>{complete}</p>
    </li>
  );
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Todo;
