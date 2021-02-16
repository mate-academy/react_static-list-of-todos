import React from 'react';
import { todoType } from '../propTypes/todoType';
import { User } from '../User/User';

import './Todo.scss';

export const Todo = ({ title, user, completed }) => (
  <div className="todos__item">
    <strong><User name={user.name} /></strong>
    <div>{title}</div>
    <div className="todos__item--complete complete">
      {completed
        ? <p className="complete__true">✓ Completed ✓</p>
        : <p className="complete__false">Need more time</p>
      }
    </div>
  </div>
);

Todo.propTypes = todoType.isRequired;
