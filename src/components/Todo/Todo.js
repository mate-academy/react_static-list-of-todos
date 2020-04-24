import React from 'react';
import './Todo.css';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ title, completed, user }) => (
  <>
    <p>
      Title:
      {' '}
      <span className="title">{title}</span>
    </p>

    <p>
      Status:
      {' '}
      {completed
        ? <span className="status status--true">True</span>
        : <span className="status status--false">False</span>
      }
    </p>
    <User {...user} />
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
