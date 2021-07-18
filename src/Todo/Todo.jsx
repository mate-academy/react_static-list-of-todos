import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <div className="todo">
    <h2 className="todo__title">{title}</h2>
    <p
      className={
        completed ? 'todo__completed' : 'todo__in-proggres'
      }
      key={completed}
    >
      {'Status: '}
      {completed ? 'completed' : 'in proggres'}
    </p>
    <User {...user} />

  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
