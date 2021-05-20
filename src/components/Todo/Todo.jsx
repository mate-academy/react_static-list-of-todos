import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({ title, completed }) => (
  <>
    <li>
      <strong>{title}</strong>
      <br />
      <br />
      <span>
        {`completed: ${completed}`}
      </span>
    </li>
    <br />
    <br />
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
};
