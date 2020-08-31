import React from 'react';
import './Todo.css';
import PropTypes from 'prop-types';

export const Todo = ({ id, title, completed, name }) => (
  <div className="Todo">
    <div className="Todo__N">{id}</div>
    <div className="Todo__name">{name}</div>
    <div className="Todo__todo">{title}</div>
    <div className="Todo__done">
      {completed ? 'v' : 'x'}
    </div>
  </div>
);

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
};
