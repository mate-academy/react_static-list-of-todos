import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <div className="Todo">
    <h2 className="Todo__title">
      {title}
    </h2>
    {completed
      ? <span className="Todo__status Todo__status--done">completed </span>
      // eslint-disable-next-line max-len
      : <span span className="Todo__status Todo__status--not-done">not completed </span>
    }
    <User {...user} />
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
  user: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
};
