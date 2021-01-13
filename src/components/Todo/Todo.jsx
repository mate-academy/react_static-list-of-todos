import React from 'react';
import { User } from '../User';
import { TaskType } from '../../types';

export const Todo = ({ task }) => (
  <>
    <td className="table__cell">{task.title}</td>
    <td className="table__cell">
      {(task.completed) ? 'Completed \u2705' : 'In progress \u274C'}
    </td>
    <td className="table__cell">
      <User user={task.user} />
    </td>
  </>
);

Todo.propTypes = {
  task: TaskType.isRequired,
};
