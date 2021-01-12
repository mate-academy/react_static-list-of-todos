import React from 'react';
import './Todo.scss';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ title, completed, user }) => (
  <div className="card">
    <User {...user} />
    <br />
    task:
    {' '}
    {title}
    <br />
    status:
    {' '}
    {completed
      ? <span className="card__status--ok">finished</span>
      : <span className="card__status">unfinished</span>}
    <br />
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
