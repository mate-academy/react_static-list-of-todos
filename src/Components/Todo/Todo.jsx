import React from 'react';
import { TodoType } from '../TodoType/TodoType';
import { User } from '../User/User';

export default function Todo({ todo }) {
  return (
    <li>
      <h2>
        {todo.title}
      </h2>
      <p>
        {todo.completed.toString()}
      </p>
      <User user={todo.user} />
    </li>
  );
}

Todo.propTypes = {
  todo: TodoType,

};

Todo.defaultProps = {
  todo: null,
};
