import React from 'react';
import './Todo.scss';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ title, completed, user, id }) => (
  <li className="todo">
    <h2 className="todo__title">
      {`${id}. ${title}`}
    </h2>
    <p className="todo__status">
      {`Status: ${completed ? 'Completed' : 'In progress'}`}
    </p>
    <User {...user} />
  </li>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
};
