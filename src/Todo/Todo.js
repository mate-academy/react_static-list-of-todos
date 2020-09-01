import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

import './Todo.css';

export const Todo = ({ title, completed, author }) => (
  <>
    <p>
      {'Task: '}
      <strong>{title}</strong>
    </p>
    <div className="info">
      {'Status: '}
      {completed
        ? <span className="completed">done</span>
        : <span className="notCompleted">in progress</span>}
      {' '}
      <User {...author} />
    </div>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  author: PropTypes.objectOf(PropTypes.string).isRequired,
}.isRequired;
