import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';
import { User } from '../User';

export const Todo = ({
  title,
  completed,
  user,
}) => (
  <>
    <h2 className="title">{title}</h2>
    <p>{completed ? 'Completed' : 'Is not completed yet'}</p>
    <User currentUser={user.name} />
  </>
);

Todo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
