import React from 'react';
import User from '../User/User';
import { TaskType } from '../types';

function Todo({ task }) {
  return (
    <>
      <td className="table__row table__row--user">
        <User user={task.user} />
      </td>
      <td className="table__row table__row--task">
        {task.title}
      </td>
      <td className="table__row">
        {(task.completed) ? 'Completed \u2713' : 'Uncompleted \u2717'}
      </td>
    </>
  );
}

Todo.propTypes = {
  task: TaskType.isRequired,
};

export default Todo;
