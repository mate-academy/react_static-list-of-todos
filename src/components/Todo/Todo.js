import React from 'react';
import './Todo.css';
import PropTypes from 'prop-types';

export const Todo = ({ title, completed }) => (
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
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
