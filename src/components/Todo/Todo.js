import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import './Todo.css';

export const Todo = ({ id, title, completed, user }) => (
  <div className="card">
    <p>{id}</p>
    {title}
    <p>{`${completed ? 'done' : 'not done'}`}</p>
    <User {...user} />
  </div>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};
