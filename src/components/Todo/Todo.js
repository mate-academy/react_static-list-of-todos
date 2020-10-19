import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './Todo.css';

export const Todo = ({ title, completed, user }) => (
  <div className="App__list">
    <div>
      <strong>
        Task
      </strong>
      {' : '}
      {title}
      <User {...user} />
    </div>
    <div>
      {completed
        ? <div className="App__positive" />
        : <div className="App__negative" />
      }
    </div>
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(
    PropTypes.shape = {
      user: PropTypes.shape = {
        name: PropTypes.string.isRequired,
      }.isRequired,
    },
  ).isRequired,
};
