import React from 'react';
import { ToDo } from '../ToDo/ToDo';

export const ToDoList = ({ todos }) => (
  todos.map(todo => (
    <ToDo key={`todo${todo.id}`} {...todo} />
  ))
);
