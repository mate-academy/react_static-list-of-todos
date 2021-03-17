import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';
import {User} from '../User/User';

export const Todo = ({
  title,
  completed,
  user,
}) => (
  <div className="card">
    <User user={user} />
    <h2>Title: {title}</h2>
    <h3>Readiness: {completed ? 'completed' : 'not completed'}</h3>
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
}
