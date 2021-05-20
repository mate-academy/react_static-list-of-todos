import React from 'react';
import { User } from '../User/User';
import PropTypes from 'prop-types';

export const Todo = ({ title, completed, user }) => {
  console.log(title);
  const status = completed ? 'completed' : 'notcompleted';
  return (
    <>
      <p>{title}</p>
      <p>{status}</p>
      <User {...user}/>
    </>
  );
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({}).isRequired,
};
