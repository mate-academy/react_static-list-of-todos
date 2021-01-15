import React from 'react';
import classNames from 'classnames';
import { TypeOfUser } from '../../types';
import { User } from '../User/User';

export const Todo = ({ task }) => (
  <>
    <td className={classNames('todo__title', { todo__done: task.completed })}>
      {task.title}
    </td>
    <td className={
      classNames('todo__mark', { 'todo__mark-done': task.completed })}
    />
    <td className={classNames('todo__user', { todo__done: task.completed })}>
      <User user={task.user} />
    </td>
  </>
);

Todo.propTypes = TypeOfUser;
