import React from 'react';
import PropTypes from 'prop-types';
import './Styles.scss';
import { User } from './User';

export const Todo = ({ title, completed, user }) => (
  <div className="frame">
    <ul>
      <li className="title">{title}</li>
      <li className={completed ? 'completed' : 'uncompleted'}>
        {(completed) ? ('C') : ('Unc')}
        omplited
      </li>
      <li><User user={user} /></li>
    </ul>
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.string.isRequired,
};
