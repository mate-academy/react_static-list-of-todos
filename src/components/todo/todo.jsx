import React from 'react';
import { TodoListType } from '../../types/type';
import { User } from '../user';
import './todo.scss';

export const Todo = ({ todo }) => (

  <>
    <h1 className="title">{todo.title}</h1>
    <p className="status">
      Status:
      {' '}
      {`${todo.completed
        ? 'completed'
        : 'not completed'}`}
    </p>
    <User todo={todo} />
  </>
);

Todo.propTypes = TodoListType.isRequired;
