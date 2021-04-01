import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { User } from '../User';

import './todo.scss';

export const Todo = ({
  user,
  title,
  completed,
}) => (
  <div className="todo_item">
    <User user={user} />
    <div
      className={classNames(
        { todo_item__completed: completed },
        { todo_item__failed: !completed },
      )}
    >
      {completed && <span>&#9745; </span>}
      {!completed && <span>&#10008; </span>}
      {title}
    </div>
  </div>
);

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};
