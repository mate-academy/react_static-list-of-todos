import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';

export const Todo = ({ user, title, completed }) => (
  <>
    <div className="todo">
      <span className="todo__title">{title}</span>
      <span className={
        `todo__status todo__status${completed && '--completed'
        }`
      }
      >
        Is complete:
      </span>
    </div>
    <div className="user">
      <User {...user} />
    </div>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
