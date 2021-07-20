import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({ title, completed, user, id }) => (
  <>
    <strong>
      {`${id}. `}
    </strong>
    <span className="list-inline-item">{title}</span>
    <span className="list-inline-item ">
      <strong>Status: </strong>
      {completed ? 'Already completed!' : 'Not completed!'}
    </span>
    <span className="list-inline-item">
      <strong>Name: </strong>
      <User name={user.name} />
    </span>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
};
