import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({ title, completed }) => (
  <>
    <span className={`${completed ? 'green' : 'red'}`}>{title}</span>
    {' --- '}
    <span className="color">{`${completed}`}</span>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
