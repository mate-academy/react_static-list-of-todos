import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './Todo.scss';

export const Todo = ({ title, completed, users }) => (
  <>
    <div className="todo">
      <h2 className="todo__name">
        {title}
      </h2>
      <p className="todo__completed">
        {
          `Completed - ${completed}`
        }
      </p>
      <User {...users} />
    </div>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
