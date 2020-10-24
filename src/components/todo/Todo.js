import React from 'react';
import { User } from '../user';
import { TodoShape } from '../shapes/TodoShape';

export const Todo = ({ id, title, completed, user }) => (
  <li key={id} className="ListItem">
    <input
      type="checkbox"
      checked={completed}
      readOnly
      className="ListItem__input"
    />

    <div className="ListItem__description">
      {title}
    </div>

    <User {...user} />
  </li>
);

Todo.propTypes = TodoShape;
