import React from 'react';
import './Todo.css';
import { TodoShape } from '../../shapes';
import { User } from '../User/User';

export const Todo = (props) => {
  const { todo } = props;

  return (
    <>
      <span>
        {todo.title}
      </span>

      <User user={todo.user} />

      <span className={`todo__status todo__status-${todo.completed}`}>
        {todo.completed.toString()}
      </span>
    </>
  );
};

Todo.propTypes = {
  todo: TodoShape.isRequired,
};
