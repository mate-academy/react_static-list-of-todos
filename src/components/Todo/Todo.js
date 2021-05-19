import React from 'react';
import PropType from 'prop-types';

import './Todo.scss';

export const Todo = ({ title, completed }) => (
  <div className="todo">
    <div className="todo__title">
      {title}
    </div>
    <div className="todo__completed">
      {completed}
    </div>
  </div>
);

Todo.propTypes = {
  title: PropType.string.isRequired,
  completed: PropType.string.isRequired,
};
