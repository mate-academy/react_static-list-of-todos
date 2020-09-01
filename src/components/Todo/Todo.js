import React from 'react';
import './Todo.scss';
import PropTypes from 'prop-types';

import { User } from '../User';

function checkCompleted(value) {
  if (value) {
    return (
      <div className="is-complited">&#10003;</div>
    );
  }

  return (
    <div className="is-not-complited" />
  );
}

export const Todo = ({
  title,
  completed,
  user,
}) => (
  <>
    <div className="todo-info">
      {checkCompleted(completed)}
      <p className="title">{title}</p>
    </div>

    <span className="user-info">
      <User {...user} />
    </span>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};
