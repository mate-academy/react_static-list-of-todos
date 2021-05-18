import React from 'react';
import PropTypes from 'prop-types';

import './Todo.scss';

export const Todo = ({ title, completed }) => {
  const bool = completed;
  const color = bool ? '#ff032c' : '#7d0418';

  return (
    <>
      <div className="title">
        {title}
      </div>
      <div className="completed" style={{ color }}>
        {`${bool}`}
      </div>
    </>
  );
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
