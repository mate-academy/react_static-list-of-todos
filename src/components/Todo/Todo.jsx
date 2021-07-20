import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <>
    <div className="todo">
      <h1 className="taskTitle">{`Title: ${title}`}</h1>
      {completed
        ? <p className="completed">Status: Completed!</p>
        : <p className="notCompleted">Status: Not completed yet</p>}
      <User name={user.name} />
    </div>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
