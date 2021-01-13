import React from 'react';
import { Todo } from './Todo';
import { TodoListShape } from '../shapes/TodoListShape';

export const TodoList = ({ todos }) => (
  <div>
    {
      todos.map(todo => (
        <Todo {...todo} key={todo.id} />
      ))
    }
  </div>
);

TodoList.propTypes = TodoListShape.isRequired;
