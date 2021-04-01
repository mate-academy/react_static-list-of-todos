import React from 'react';
import propTypes from 'prop-types';
import { User } from '../User';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <li className="todo-list__item item">
    <User {...user} />
    <p className="item__title">
      {title}
    </p>
    {completed ? (
      <span className="item__status item__status--completed">&#10004;</span>
    ) : (
      <span className="item__status">&#10006;</span>
    )}
  </li>
);

Todo.propTypes = {
  title: propTypes.string.isRequired,
  completed: propTypes.bool.isRequired,
  user: propTypes.shape({
    name: propTypes.string.isRequired,
  }).isRequired,
};
