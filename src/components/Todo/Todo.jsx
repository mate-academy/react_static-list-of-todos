import React from 'react';
import propTypes from 'prop-types';
import { User } from '../User';
import './Todo_Styles.scss';

export const Todo = ({ title, completed, user }) => {
  console.log('title = ', title, '\ncomp = ', completed, user);
  // console.log('completed = ', completed);
  // console.log(user);

  return (
    <>
      <h2 className="title">
        {title}
      </h2>
      <p className={completed ? 'completed' : 'notCompleted'}>
        {completed ? 'It is done' : 'It is not done yet'}
      </p>
      <User userName={user.name} />
    </>
  );
};

export const TodoType = propTypes.shape({
  title: propTypes.string.isRequired,
  completed: propTypes.bool.isRequired,
  user: propTypes.shape({
    name: propTypes.string.isRequired,
  }).isRequired,
});

Todo.propTypes = {
  ...TodoType,
};
