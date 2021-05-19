import React from 'react';
import { User } from '../User/User';
import './Todo.scss'
import PropTypes from 'prop-types';

export const Todo = ({ title, completed, user}) => (
  <li className="userCard">
    <User {...user}/>
    <p className="todoTitle">● {title}</p>
    <span className="todoStatus">{`Status: ${completed ? '✔' : '✘'}`}</span>
  </li>
)

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
