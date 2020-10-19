import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './Todo.scss';

export const Todo = ({ title, user, completed }) => (
  <div className="
    todo
    d-flex
    justify-content-between
    list-group-item
    list-group-item-action
  "
  >
    <div>
      <p className="todo__title">
        {title}
      </p>
      <User {...user} />
    </div>
    {completed
      ? <p className="todo__status todo__status--true">Done</p>
      : <p className="todo__status todo__status--false">Not done yet</p>
    }
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.objectOf(
    PropTypes.shape = {
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.shape = {
        name: PropTypes.string.isRequired,
      }.isRequired,
    },
  ).isRequired,
  completed: PropTypes.bool.isRequired,
};
