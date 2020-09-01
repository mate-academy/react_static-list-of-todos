import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import './Todo.css';

export const Todo = ({ title, completed, user }) => (
  <div className="card">
    <h3>To do:</h3>
    <span>{title}</span>
    {completed
      ? <div className="card__true" />
      : <div className="card__false" />
    }

    <User {...user} />
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};
