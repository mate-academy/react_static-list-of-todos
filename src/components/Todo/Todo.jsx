import React from 'react';
import './Todo.scss';
import TodoTypes from '../Type/Type';
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
      ? <td className="good">well done</td>
      : <td className="bad">false</td>}
  </tr>
);

Todo.propTypes = TodoTypes;
