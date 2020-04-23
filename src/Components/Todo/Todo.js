import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ todo: { user, title, completed } }) => {
  const yesCompleted = <span>Completed</span>;
  const noCompleted = <span>Incompleted</span>;

  return (
    <>
      <User user={user} />
      {completed ? yesCompleted : noCompleted}
      <p>{title}</p>
    </>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    user: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
