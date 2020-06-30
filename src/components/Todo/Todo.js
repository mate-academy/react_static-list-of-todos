import React from 'react';
import { User } from '../User/User';
import './Todo.css';
import { TodoShape } from '../Shape';

export const Todo = ({ id, title, completed, user }) => (
  <div className="card">
    <p>{id}</p>
    {title}
    <p>{`${completed ? 'done' : 'not done'}`}</p>
    <User {...user} />
  </div>
);

Todo.propTypes = TodoShape.isRequired;
