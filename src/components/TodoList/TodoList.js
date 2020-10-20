import React from 'react';
import { TodoListShape } from '../../shapes';
import { Todo } from '../Todo';

export const TodoList = ({ todos }) => (
  <div>
    {todos.map(todo => (
      <Todo {...todo} key={todo.id} />
    ))}
  </div>
);

TodoList.propTypes = TodoListShape;
