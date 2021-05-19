import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';
import { User } from '../User';

export const Todo = ({ title, completed, user }) => (
  <li className="Todo">
    <span>
      <span className="Todo__title">{title}</span>
      {` – `}
      <User {...user} />
    </span>

    <span className={`Todo__completed ${completed
      ? 'Todo__completed--true'
      : 'Todo__completed--false'
    }`}
    >
      {`${completed}`}
    </span>
  </li>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
