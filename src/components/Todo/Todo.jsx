import React from 'react';
import './Todo.scss';
import User from '../User';
import { UserShape } from '../../Types';

const Todo = ({ user, title, completed }) => (
  <>
    <User {...user} />
    <th>{title}</th>
    <th colSpan="4">
      {completed
        ? <span className="spanGreen"> Done!</span>
        : <span className="spanRed"> in progress</span>}
    </th>
  </>
);

Todo.propTypes = UserShape.isRequired;

export default Todo;
