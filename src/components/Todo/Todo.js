import React from 'react';
import { User } from '../User/User';
import styles from './Todo.module.css';
import { TodoShape } from '../shapes/TodoShape';

export const Todo = ({ todo }) => {
  const { completed, title, user } = todo;

  return (
    <div className={completed
      ? styles.completed
      : styles['not-completed']}
    >
      <h6>{title}</h6>
      <p>
        completed:
        {completed.toString()}
      </p>
      <User user={user} />
    </div>
  );
};

Todo.propTypes = {
  todo: TodoShape.isRequired,
};
