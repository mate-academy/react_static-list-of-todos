import React from 'react';
import './Todo.scss';
import { TodoType } from '../Type/Type';
import { User } from '../User/User';

export const Todo = ({ title, completed, user }) => (
  <tr>
    <td>
      {title}
    </td>
    <td>
      <User {...user} />
    </td>
    {completed
      ? <td className="completed">well done</td>
      : <td className="not__completed">false</td>
    }
  </tr>
);

Todo.propTypes = TodoType;
