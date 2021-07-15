
import React from 'react';
import { TodoListProps } from '../../Props';

import Todo from '../Todo/Todo';
import './TodoList.scss';

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: TodoListProps.isRequired,
};

export default TodoList;
