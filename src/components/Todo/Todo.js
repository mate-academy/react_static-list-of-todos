import React from 'react';
import './Todo.scss';
import { User } from '../User';
import { TodoShape } from '../propTypes/TodoShape';

export const Todo = ({ todo }) => {
  const statusModifier = todo.completed ? 'todo__status--completed' : '';

  return (
    <div className="todo">
      <div className="todo__info">
        <p className="todo__task">{todo.title}</p>
        <span>User :</span>
        <User user={todo.user} />
      </div>
      <div className={`todo__status ${statusModifier}`}>
        <p>{todo.completed ? 'Done' : 'Just do it!'}</p>
      </div>
    </div>
  );
};

Todo.propTypes = {
  todo: TodoShape.isRequired,
};
