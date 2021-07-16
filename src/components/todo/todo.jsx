import React from 'react';
import './todo.scss';
import todos from '../../api/todos';
import users from '../../api/users';
import { User } from '../user/user';

export const Todo = () => (
  todos.map(todo => (
    <div className="todo__item" key={todo.id}>
      <p>
        Title:
        {' '}
        {todo.title}
      </p>
      <p>
        Status:
        {todo.completed ? ' completed' : ' in progress'}
      </p>
      <User {...users.find(user => user.id === todo.userId)} />
    </div>
  ))
);
