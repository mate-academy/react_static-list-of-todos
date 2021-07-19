import React from 'react';
import propTypes from 'prop-types';
import { ToDo } from '../Todo/Todo';
import './ToDoList.scss';
import { userTemplate } from '../objFit';

export const ToDoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li className="ToDo" key={todo.id}>
        <ToDo toDo={todo} />
      </li>
    ))}
  </ul>
);

ToDoList.propTypes = {
  todos: propTypes.arrayOf(propTypes.shape({
    completed: propTypes.bool.isRequired,
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    userId: propTypes.number.isRequired,
    user: userTemplate,
  })).isRequired,
};
