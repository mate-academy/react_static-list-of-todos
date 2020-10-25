import React from 'react';
import './Todo.scss';
import { User } from '../User';
import { todoShape } from '../propTypes/todoShape';

export const Todo = ({ todo }) => (
  <div className="todo">
    <div className="todo__info">
      <p className="todo__task">{todo.title}</p>
      <span>User :</span>
      <User user={todo.user} />
    </div>
    <div
      className={`todo__status ${
        todo.completed ? 'todo__status--completed' : ''}`}
    >
      <p>{todo.completed ? 'Done' : 'Just do it!'}</p>
    </div>
  </div>
);

Todo.propTypes = {
  todo: todoShape.isRequired,
};
