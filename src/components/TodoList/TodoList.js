import React from 'react';
import { Todo } from '../Todo';
import { User } from '../User';
import { TypeTodoList } from '../../types';

export const TodoList = ({ todos }) => (
  <ol>
    {todos.map(task => (
      <>
        <li key={task.id}>
          <User name={task.user.name} />
          <br />
          <Todo todo={task} />
        </li>
        <br />
      </>
    ))}
  </ol>
);

TodoList.propTypes = TypeTodoList;
