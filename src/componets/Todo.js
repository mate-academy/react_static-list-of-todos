import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({ title, completed }) => (
  <>
    {title}
    {' --- '}
    <span className="color">{`${completed}`}</span>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
