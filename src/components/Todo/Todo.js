import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import './Todo.scss';
import { User } from '../User';

export const Todo = ({ title, completed, userTodo }) => (
  <>
    <h4 className="todo__title">
      {title}
    </h4>
    <div
      className={ClassNames(
        'todo__completed',
        { ' todo__completed-done': completed },
      )}
    />
    <User {...userTodo} />
  </>
);

Todo.defaultProps = {
  completed: false,
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  userTodo: PropTypes.objectOf(PropTypes.any).isRequired,
};
