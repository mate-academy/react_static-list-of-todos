import React from 'react';
import { Todo } from '../Todo';
import { TodoListShape } from '../propTypes/TodoListShape';

export const TodoList = ({ todos }) => (
  <>
    {todos.map(item => (
      <ul className="todoList" key={item.id}>
        <Todo {...item} />
      </ul>
    ))}
  </>
);

TodoList.propTypes = TodoListShape;
