import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { User } from '../User/User';
import './Todo.scss';

export const Todo = ({
  title,
  completed,
  user,
}) => (
  <>
    <User {...user} />
    <p>
      {title}
    </p>
    <p
      className={cn({
        'todo-completed': completed,
        'todo-inprogress': !completed,
      })}
    >
      {completed ? 'done' : 'in progress'}
    </p>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
