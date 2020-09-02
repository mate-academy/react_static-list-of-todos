import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './Todo.scss';

export const Todo = ({ user, title, completed }) => (
  <>
    <h2>{title}</h2>
    <User user={user} />
    {completed
      ? <span className="completed">Done</span>
      : <span className="uncompleted">Undone</span>}
  </>
);

Todo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
