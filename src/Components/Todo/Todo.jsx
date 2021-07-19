import React from 'react';
import { PreparedTodosType } from '../../types/PreparedTodosTypes';
import { User } from '../User';
import './Todo.css';

export const Todo = ({ task }) => (
  <>
    <p className="taskCard__title">
      <strong>task: </strong>
      {task.title}
    </p>
    <p className="taskCard__status">
      Status:
      {' '}
      {`${task.completed ? 'finished' : 'in progress'}`}
    </p>
    <User task={task} />
  </>
);

Todo.propTypes = PreparedTodosType.isRequired;
