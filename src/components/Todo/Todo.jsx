import React from 'react';
import User from '../User/User';
import './Todo.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Todo = ({todo}) => (
  <>
  <User {...todo.user}/>
  {' - '}
  <span>{todo.title}</span>
  {' - '}
  <span className={classNames("card__task-status", {
    'card__task-status--completed': todo.completed,
    'card__task-status--not-completed': !todo.completed,
  })}>
    {todo.completed  ? "Completed" : "Not completed"}
  </span>
  </>
)

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }),
}

export default Todo;
