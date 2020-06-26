import React from 'react';
import { User } from '../User/User';
import { ShapeTodo } from '../Shapes';

export const Todo = ({ todo }) => (
  <p>
    {todo.completed
      ? (
        <span className="item--done">
          DONE
          <span role="img" aria-label="done">✅</span>
        </span>
      )
      : (
        <span className="item--undone">
          UNDONE
          <span role="img" aria-label="undone">😧</span>
        </span>
      )}
    <User userInfo={todo.user} />
  </p>
);

Todo.propTypes = {
  todo: ShapeTodo.isRequired,
};
