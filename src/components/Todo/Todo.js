import React from 'react';
import './Todo.scss';

import { User } from '../User';
import { TodoShapes } from '../../shapes/TodoShapes';

export const Todo = ({ title, completed, user }) => (
  <li className="item">
    <User {...user} />
    {completed ? (
      <>
        <p>{title}</p>
        <p className="badge rounded-pill bg-success">
          DONE
        </p>
      </>
    ) : (
      <>
        <p><i>{title}</i></p>
        <p className="badge bg-danger">
          DO IT
        </p>
      </>
    )}
  </li>
);

Todo.propTypes = TodoShapes;
