import React from 'react';
import propTypes from 'prop-types';
import { ToDo } from '../Todo/Todo';
import './ToDoList.scss';
import { template } from '../objFit';

export const ToDoList = ({ toDos }) => (
  <ul>
    {toDos.map(item => (
      <li className="ToDo" key={item.id}><ToDo toDo={item} /></li>
    ))}
  </ul>
);

ToDoList.propTypes = {
  toDos: propTypes.arrayOf(propTypes.shape({
    completed: propTypes.bool.isRequired,
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    userId: propTypes.number.isRequired,
    user: template,
  })).isRequired,
};
