import React from 'react';
import { User } from './User/User';
import { todoShape } from '../shapes';

export const Todo = ({ todoObj }) => (
  <>
    <div className="item">
      <h3>{todoObj.title}</h3>
      <p>{todoObj.completed ? 'Completed.' : 'Not completed.'}</p>
      <User currentUser={todoObj.user.name} />
    </div>
  </>
);
Todo.propTypes = {
  todoObj: todoShape.isRequired,
};
