import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './Todo.scss';

export const Todo = ({ user, title, completed }) => (
  <>
    <h2>{title}</h2>
    <User user={user} />
    <span className={completed ? 'completed' : 'uncompleted'}>
      {completed ? 'Done' : 'Undone'}
    </span>
  </>
);

Todo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
