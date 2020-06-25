import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

import './Todo.css';

export const Todo = ({ title, user, completed }) => (
  <div className="todo__item">
    <div className="todo__item_title">
      {title}
    </div>
    <User {...user} />
    <div className="todo__item_status">
      {
        completed
          ? <input type="checkbox" checked />
          : <input type="checkbox" />
      }
    </div>
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
