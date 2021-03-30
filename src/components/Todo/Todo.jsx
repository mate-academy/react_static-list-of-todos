import React from 'react';
import PropTypes from 'prop-types';
import './todo.scss';
import { User } from '../User';

export function Todo({title, completed, userId}) {
  return (
    <div className="todo">
      <User {...userId} />
      {title}: {completed ? 'completed' : 'not completed'}
    </div>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
}
