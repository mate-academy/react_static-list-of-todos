import React from 'react';
import User from './User';
import { TodoShape } from '../shapes/TodoShape';

const Todo = ({ title, user, completed }) => (
  <tr>
    <td><User name={user.name} scope="row" /></td>
    <td>{title}</td>
    <td>
      {completed
        ? (
          <div className="bg-success">
            Completed
          </div>
        )
        : (
          <div className="bg-danger">
            Not Completed
          </div>
        )
      }
    </td>
  </tr>
);

Todo.propTypes = TodoShape;

export default Todo;
