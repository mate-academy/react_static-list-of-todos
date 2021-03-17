import React from 'react';
import { TodoType } from '../TodoType/TodoType';
import { User } from '../User';
import './Todo.css';

export default function Todo({ todo }) {
  return (
    <li>
      <h2>
        {todo.title}
      </h2>
      <p className={todo.completed ? 'completed' : 'uncompleted'}>
        {
          todo.completed
            ? 'Completed'
            : 'Not completed'
        }
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
