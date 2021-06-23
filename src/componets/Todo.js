import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({ title, completed, User }) => (
  <>
    <span
      className={`${completed ? 'color__true' : 'color__false'}`}
    >
      {title}
    </span>
    {' --- '}
    <span className="color__boolean">{`${completed}`}</span>
    {' --- '}
    <span className="name-style">{User.name}</span>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  User: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
