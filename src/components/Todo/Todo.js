import React from 'react';
import './Todo.css';
import { User } from '../User/User';
import { TodoTypes } from '../Shape/TodoTypes';

export const Todo = props => (
  <>
    <div className={props.completed ? 'done' : 'undone'} />
    <p className="task">
      {props.title}
    </p>
    <User user={props.user} />
  </>
);

Todo.propTypes = TodoTypes;
