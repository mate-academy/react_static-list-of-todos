import React from 'react';
import { ShapeTodoItem } from '../Shapes';
import './TodoItem.css';

const TodoItem = ({ name, title, completed, id }) => (
  <li className={String(completed)} key={id}>
    <h3>
      {name}
    </h3>
    <p>
      {title}
    </p>
  </li>
);

TodoItem.propTypes = ShapeTodoItem.isRequired;

export default TodoItem;
