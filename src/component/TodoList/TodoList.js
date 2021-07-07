import React from 'react';
import Todo from '../Todo/Todo';
import './TodoList.scss';
import { TodoListShape } from '../shapes/TodoListShape';

const TodoList = ({ todos }) => (
  <div className="todo-list">
    {todos.map(todo => <Todo key={todo.id} {...todo} />)}
  </div>

);

TodoList.propTypes = TodoListShape;

export default TodoList;
