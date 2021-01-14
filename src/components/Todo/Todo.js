import React from 'react';
import './Todo.scss';

import { TodoTypes } from '../../types';
import { User } from '../User/User';

export const Todo = ({ title, completed, user }) => (
  <tr>
    <td className="cell"><User user={user} /></td>
    <td className="cell">{title}</td>
    <td
      style={{ backgroundColor: `${completed ? 'greenyellow' : 'red'}` }}
      className="cell"
    >
      {completed ? 'completed' : 'not completed'}
    </td>
  </tr>
);

Todo.propTypes = TodoTypes;
