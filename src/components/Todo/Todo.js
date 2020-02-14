import React from 'react';
import './Todo.css';
import PropTypes from 'prop-types';

export const Todo = ({ title, completed }) => (
  <>
    <p className="title">
      <strong>Title</strong>
      { `: ${title}` }
    </p>

    <p className="status">
      <strong>Status: </strong>
      {completed
        ? (<span className="status--true">True</span>)
        : (<span className="status--false"> False</span>)}
    </p>

  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
