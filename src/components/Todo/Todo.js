import React from 'react';
import { TypeOfUser } from '../../types';
import { User } from '../User/User';

export const Todo = ({ task }) => (
  <>
    <td className={task.completed ? 'todo__title-yes' : 'todo__title-no'}>
      {task.title}
    </td>
    <td className={task.completed ? 'todo__done-yes' : 'todo__done-no'} />
    <td className={task.completed ? 'todo__user-yes' : 'todo__user-no'}>
      <User user={task.user} />
    </td>
  </>
);

Todo.propTypes = TypeOfUser;
