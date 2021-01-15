import React from 'react';
import { TypeOfTodos } from '../../types';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ tasks }) => (
  <table>
    <thead>
      <tr>
        <th>Task</th>
        <th>Done</th>
        <th>Person</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map(task => (
        <tr key={task.id}>
          <Todo task={task} />
        </tr>
      ))}
    </tbody>

  </table>
);

TodoList.propTypes = TypeOfTodos;
