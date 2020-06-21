import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import styles from './Todo.module.css';

export const Todo = props => (
  <div className={props.todo.completed
    ? styles.completed
    : styles['not-completed']}
  >
    <h6>{props.todo.title}</h6>
    <p>
      completed:
      {props.todo.completed.toString()}
    </p>
    <User user={props.todo.user} />
  </div>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    user: PropTypes.objectOf,
  }).isRequired,
};
