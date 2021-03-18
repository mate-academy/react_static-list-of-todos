import React from 'react';
import { TypeTodo } from '../../types';
import { User } from '../User';
import { CompletedTask } from '../CompletedTask';
import './Todo.scss';

export const Todo = ({
  title,
  completed,
  user,
}) => (
  <>
    {`task: ${title}`}
    <br />
    {`status: `}
    <CompletedTask status={completed} />
    <br />
    <User {...user} />
  </>
);

Todo.propTypes = TypeTodo;
