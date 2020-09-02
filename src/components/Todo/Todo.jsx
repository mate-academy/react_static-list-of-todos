import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({
  title,
  completed,
  user,
}) => {
  const isCompleted = completed ? 'todo-completed' : 'todo-inprogress';

  return (
    <li className={`todo ${isCompleted}`}>
      <User {...user} />
      <p>
        {title}
      </p>
      <p>
        {completed ? 'done' : 'in progress'}
      </p>
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
