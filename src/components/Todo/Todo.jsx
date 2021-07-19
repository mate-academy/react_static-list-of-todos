import React from 'react';
import { User } from '../User/User';
import { TodoProps } from '../TodoProps';

export const Todo = ({ title, completed, user }) => (
  <>
    <p>{title}</p>
    <p>{`Status: ${completed ? 'done' : 'in progress'}`}</p>
    <User {...user} />
  </>
);

Todo.propTypes = TodoProps;
