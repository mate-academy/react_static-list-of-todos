import React from 'react';
import './Todo.scss';
import { TypeTodo } from '../../types';

export const Todo = ({ todo }) => (
  <>
    {todo.title}
    {' '}
    is
    {' '}
    {todo.completed ? <span className="todo--complete">completed</span>
      : <span className="todo--uncomplete">in progress</span>}
  </>
);

Todo.propTypes = TypeTodo;
