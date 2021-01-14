import React from 'react';
import { TodoTypes } from '../../types';
import './Todo.scss';

export const Todo = ({ todo }) => (
  <>
    <p className="title">
      {todo.title}
    </p>

    <p className="status">
      {`Task is ${todo.completed ? 'completed.' : 'not completed yet.'}`}
    </p>
  </>
);

Todo.propTypes = TodoTypes.isRequired;
