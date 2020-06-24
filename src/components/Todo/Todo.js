import React from 'react';
import PropTypes from 'prop-types';
import { userShape } from '../../shapes';
import './Todo.css';
import { User } from '../User/User';

export const Todo = ({ title, completed, user }) => (
  <li className="item">
    <User {...user} />
    <p className="item__title">{title}</p>
    {
      completed
        ? <p className="item__completed">Done</p>
        : <p className="item__uncompleted">Not Done Yet</p>
    }
  </li>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: userShape.isRequired,
};
