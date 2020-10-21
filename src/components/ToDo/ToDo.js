import React from 'react';
import { User } from '../User';
import { ToDoShape } from '../shapes/ToDoShape';

export const ToDo = ({ completed, title, user }) => (
  <li className="todo">
    <input
      type="checkbox"
      checked={completed}
      readOnly
      className="checkbox"
    />
    <p>
      {title}
    </p>
    <User {...user} />
  </li>
);

ToDo.propTypes = ToDoShape;
