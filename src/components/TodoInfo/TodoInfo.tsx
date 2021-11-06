/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export const TodoInfo: React.FC<Todo> = ({ title, completed }) => (
  <div className="todo">
    <h3 className="todo-name">{title}</h3>
    <label htmlFor="checkboxCompleted">
      <input type="checkbox" id="checkboxCompleted" checked={completed} />
      {completed ? 'Completed' : 'In progres'}
    </label>
  </div>
);
