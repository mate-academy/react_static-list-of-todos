import React from 'react';
import { Todo } from '../Todo';
import { TodoShape } from '../shapes/TodoShape';

export const TodoList = ({ preparedTodos }) => (
  <ul className="list">
    {
      preparedTodos.map(todo => <Todo {...todo} key={todo.id} />)
    }
  </ul>
);

TodoList.propTypes = TodoShape;
