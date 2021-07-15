import React from 'react';
import './Todo.scss';
import { User } from '../User/User';
import { TodoPropTypes } from './TodoPropTypes';

export const Todo = ({ id, title, completed, user }) => (
  <div className="Todo" key={id}>
    <h3 className="Todo__title" key={title}>
      {title}
    </h3>
    <p
      className={
      completed ? 'Todo__compiled' : 'Todo__in-process'
      }
      key={completed}
    >
      Status:
      {` ${completed ? 'completed' : 'in progress'} `}
    </p>
    <User className="Todo__user" {...user} />
  </div>
);

Todo.propTypes = TodoPropTypes;
