import React from 'react';
import propTypes from 'prop-types';
import { User } from '../User/User';
import './todo.scss';

export const Todo = ({ title, completed, user }) => (
  <>
    <User {...user} />
    <div className="title">
      {title}
    </div>
    {completed
      ? <div className="completed status">completed</div>
      : <div className="notCompleted status">not completed</div>
    }
  </>
);

Todo.propTypes = {
  title: propTypes.string.isRequired,
  completed: propTypes.bool.isRequired,
  user: propTypes.shape({
    name: propTypes.string.isRequired,
  }).isRequired,
};
