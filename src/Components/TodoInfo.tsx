import React from 'react';
import { TaskInfo } from '../Types/Todo';

export const TodoInfo: React.FC<TaskInfo> = ({ title, completed }) => (
  <>
    <td>{title}</td>
    <td>{completed ? 'Completed' : 'In progress'}</td>
  </>
);
