import React from 'react';
import { Todo } from './Todo';

export const TodoList = ({ prepared }) => (
  <ul className="ul">
    {prepared.map(element => (
      <li key={element.id} className="li">
        <Todo {...element} />
      </li>
    ))}
  </ul>
);
