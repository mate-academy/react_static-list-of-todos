import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ title, completed, user }) => (
  <>
    <div className="todo">
      <h3>
        Task:
        <span className="todo__title">
          {' '}
          {title}
        </span>
      </h3>
      <h3>
        Completed:
        <span className="todo__status">
          {' '}
          {completed ? 'true' : 'false'}
        </span>
      </h3>
    </div>
    <User {...user} />
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string,
      street: PropTypes.string,
      suite: PropTypes.string,
    }),
  }),
};

Todo.defaultProps = {
  user: 'Is not provided',
};
