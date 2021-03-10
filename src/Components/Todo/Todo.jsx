import React from 'react';
import { TodoType } from '../TodoType/TodoType';
import { User } from '../User/User';
import { UserType } from '../UserType/UserType';

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
  user: UserType,
};

Todo.defaultProps = {
  user: null,
  todo: null,
};
