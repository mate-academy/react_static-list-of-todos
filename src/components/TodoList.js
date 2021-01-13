import React from 'react';
import { TypeTodoList } from '../types';
import Todo from './Todo';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = TypeTodoList;

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;
