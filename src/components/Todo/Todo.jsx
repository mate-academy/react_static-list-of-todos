import React from 'react';
import { User } from '../User';
import { todoShape } from '../../types';

export const Todo = ({ todoObj }) => (
  <>
    <h3>{todoObj.title}</h3>
    <p>{todoObj.completed ? 'Completed.' : 'Is not completed yet.'}</p>
    <User currentUser={todoObj.user.name} />
  </>
);

Todo.propTypes = {
  todoObj: todoShape.isRequired,
};
