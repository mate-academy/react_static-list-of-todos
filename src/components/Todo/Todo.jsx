import React from 'react';
import { PreparedTodosType } from '../../types/PreparedTodosTypes';
import { User } from '../User';
import './Todo.scss';

export const Todo = ({ task }) => (
  <>
    <p className="title">{task.title}</p>
    <p className="status">
      <strong>Status:</strong>
      {' '}
      {`${task.completed ? 'completed' : 'not completed'}`}
    </p>
    <User task={task} />
  </>
);

Todo.propTypes = PreparedTodosType.isRequired;
