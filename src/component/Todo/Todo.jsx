import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({ user, title, completed }) => (
  <>
    {(completed)
      ? (
        <div className="todo-list__item-wrapper todo-list__item-wrapper--green">
          <>
            <User name={user} />
            <p>{title}</p>
            <span
              className="todo-list__completed todo-list__completed--green"
            >
              completed
            </span>
          </>
        </div>
      )
      : (
        <div className="todo-list__item-wrapper todo-list__item-wrapper--red">
          <>
            <User name={user} />
            <p>{title}</p>
            <span
              className="todo-list__completed todo-list__completed--red"
            >
              not completed
            </span>
          </>
        </div>
      )
    }
  </>
);

Todo.propTypes = {
  user: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
