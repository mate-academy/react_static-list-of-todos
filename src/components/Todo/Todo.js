import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import './Todo.css';

export const Todo = ({ todo: { title, user, completed } }) => (
  <div className="card">
    <h3 className="user__name"><User user={user} /></h3>
    <p className="user__title">{title}</p>
    {completed
      ? <span className="user__complated user__complated--on">Anabled</span>
      : <span className="user__complated user__complated--off">Disabled</span>
    }
  </div>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
