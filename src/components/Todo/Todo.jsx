import React from 'react';
import './Todo.scss';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({ title, completed, user }) => (
  <div className="todo">
    <div className="todo__item">
      <strong className="todo__title">Title: </strong>
      {title}
    </div>
    <div className="todo__item">
      <strong className="todo__complete"> Status: </strong>
      { completed ? ' completed' : ' not completed yet'}
    </div>
    <div className="todo__item">
      <strong className="todo__name"> Name: </strong>
      <User name={user.name} />
    </div>
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
