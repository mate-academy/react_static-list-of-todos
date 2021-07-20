import React from 'react';
import { TypesOfTodoList } from '../../types/type';
import { User } from '../user';
import './todo.scss';

export const Todo = ({ task }) => (

  <>
    <h1 className="title">{task.title}</h1>
    <p className="status">
      Status:
      {' '}
      {`${task.completed
        ? 'completed'
        : 'not completed'}`}
    </p>
    <User task={task} />
  </>
);

Todo.propTypes = TypesOfTodoList.isRequired;
