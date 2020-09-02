import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import './Todo.scss';

export const Todo = ({
  title,
  completed,
  user,
}) => {
  const isCompleted = completed ? 'todo-completed' : 'todo-inprogress';

  return (
    <>
      <User {...user} />
      <p>
        {title}
      </p>
      <p className={isCompleted}>
        {completed ? 'done' : 'in progress'}
      </p>
    </>
  );
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
