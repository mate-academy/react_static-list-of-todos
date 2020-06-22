import React from 'react';
import { User } from '../User/User';
import styles from './Todo.module.css';
import { todoShape } from '../shapes/TodoShape';

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
  todo: todoShape.isRequired,
};
