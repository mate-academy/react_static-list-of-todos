import React from 'react';
import { User } from '../User/User';
import { TodoShape } from '../../shapes';
import './Todo.css';

export const Todo = ({ todo }) => (
  <>
    <span className="todo__task">
      Task:&nbsp;
      {todo.title}
    </span>

    <User user={todo.user} />

    <span className={`todo__status todo__status_${todo.completed}`}>
      Done:&nbsp;
      {todo.completed.toString()}
    </span>
  </>
);

Todo.propTypes = {
  todo: TodoShape.isRequired,
};
