import React from 'react';
import { Todo } from '../Todo/Todo';
import './TodoList.css';
import { TodoListShape } from './TodoListShape';

export function TodoList(props) {
  const { todolist } = props;

  return (
    <>
      <h1>Static list of todos</h1>
      <span>Todos: </span>
      {todolist.length}
      <ul className="tasks">
        {todolist.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

TodoList.propTypes = TodoListShape;
