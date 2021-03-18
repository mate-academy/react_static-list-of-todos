import React from 'react';
import { TodoType } from '../TodoType/TodoType';
import { User } from '../User';
import './Todo.css';

export default function Todo({ todo }) {
  return (
    <div className="container">
      <User user={todo.user} />
      <h2 className="title">
        {
          `: ${todo.title}`
        }
      </h2>
      <p className={todo.completed ? 'completed' : 'uncompleted'}>
        {
          todo.completed
            ? '✅'
            : '❌'
        }
      </p>
    </div>
  );
}

Todo.propTypes = {
  todo: TodoType,

};

Todo.defaultProps = {
  todo: null,
};
