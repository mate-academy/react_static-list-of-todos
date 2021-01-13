import React from 'react';
import User from './User';
import { TodoShape } from '../types';

const Todo = ({ title, completed, user }) => (
  <>
    <h2>{title}</h2>
    <p>
      <b>Completed:</b>
      {completed ? 'No' : 'Yes'}
    </p>
    <User user={user.name} />
  </>
);

Todo.propTypes = TodoShape.isRequired;

export default Todo;
