import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

import './Todo.css';

export const Todo = ({ todo }) => (
  <>
    <p>
      {'Task: '}
      <strong>{todo.title}</strong>
    </p>
    <div className="info">
      {'Status: '}
      {todo.completed
        ? <span className="completed">done</span>
        : <span className="notCompleted">in progress</span>}
      {' '}
      <User user={todo.author} />
    </div>
  </>
);

Todo.propTypes = {
  todo: PropTypes.objectOf(PropTypes.string).isRequired,
};
