import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({ title, completed, user }) => (
  <>
    {(completed)
      ? (
        <div className="todo-list__item-wrapper todo-list__item-wrapper--green">
          <>
            <User {...user} />
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
            <User {...user} />
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

const userShape = {
  name: PropTypes.string.isRequired,
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};
