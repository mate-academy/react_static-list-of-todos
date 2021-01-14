import React from 'react';
import { TypeTodoList } from '../types';
import Todo from './Todo';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <Todo {...todo} key={todo.id} />
    ))}
  </ul>
);

TodoList.propTypes = TypeTodoList;

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;
