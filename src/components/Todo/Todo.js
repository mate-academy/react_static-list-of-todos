import React from 'react';
import { TypeOfUser } from '../../types';
import { User } from '../User/User';

export const Todo = ({ task }) => (
  <>
    <td style={{ background: task.completed ? 'lightgreen' : 'lightcoral' }}>
      {task.title}
    </td>
    <td style={{ background: task.completed ? 'green' : 'red' }} />
    <td style={{
      textAlign: 'center',
      background: task.completed ? 'lightgreen' : 'lightcoral',
    }}
    >
      <User user={task.user} />
    </td>
  </>
);

Todo.propTypes = TypeOfUser;
