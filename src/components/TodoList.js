import React from 'react';
import { Todo } from './Todo';
import { TodoListShape } from '../shapes/TodoListShape';

export const TodoList = ({ todos }) => (
  <>
    {
      todos.map(todo => (
        <Todo {...todo} key={todo.id} />
      ))
    }
  </>
);

TodoList.propTypes = TodoListShape.isRequired;
