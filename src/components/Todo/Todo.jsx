import React from 'react';
import { User } from '../User/User';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <div className={'todo ' + (completed ? 'todo--completed'
  : 'todo--noCompleted')}>
    <h2>{title}</h2>
    <User {...user}/>
  </div>
);
