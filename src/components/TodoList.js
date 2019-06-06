import React from 'react';
import {todos} from '../todos';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList() {
  const todoList = [];

  for (let todo of todos) {
    todoList.push(TodoItem(todo));
  }

  return (
    <table>
      <tbody>
        {todoList}
      </tbody>
    </table>
  );
}

export default TodoList;
