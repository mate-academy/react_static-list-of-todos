import React from 'react';
import { ShapeTodo } from '../Shapes/ShapeTodo';
import { User } from '../User/User';

import './Todo.css';

export const Todo = ({ title, user, completed }) => (
  <div className="todo__item">
    <div className="todo__item_title">
      {title}
    </div>
    <User {...user} />
    <div className="todo__item_status">
      {
        completed
          ? <input type="checkbox" checked />
          : <input type="checkbox" />
      }
    </div>
  </div>
);

Todo.propTypes = ShapeTodo.isRequired;
