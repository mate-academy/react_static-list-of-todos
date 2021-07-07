import React from 'react';
import { User } from '../user';
import { TodoShape } from '../shapes/TodoShape';

export const Todo = ({ id, title, completed, user }) => (
  <li key={id} className="list__item item">
    <input
      type="checkbox"
      checked={completed}
      readOnly
      className="item__input"
    />

    <div className="item__description">
      {title}
    </div>

    <User {...user} />
  </li>
);

Todo.propTypes = TodoShape;
