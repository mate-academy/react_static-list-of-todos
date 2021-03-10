import React from 'react';
import { User } from './User';
import { TodoType } from '../types';

export const Todo = ({ title, completed, user }) => (
  <>
    <p className="title">{title}</p>
    <p>{completed ? 'done' : 'to do'}</p>
    <User user={user} />
  </>
);

Todo.propTypes = TodoType;
