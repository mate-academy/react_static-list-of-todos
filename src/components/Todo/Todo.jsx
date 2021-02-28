import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './Todo.scss';
import tick from './tick.png';

export const Todo = ({ title, completed, user }) => (
  <div className="todoContainer">
    <div className="todoTitle">
      <p>{title}</p>
      {completed && (<img src={tick} alt="completed" />)}
    </div>

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
