import React from 'react';
import { Todo } from '../Todo';
import { todoListPropType } from '../propTypes/todoListProptype';

export const TodoList = ({ todos }) => (
  <>
    {todos.map(item => (
      <ul key={item.id}>
        <li>
          <Todo {...item} />
        </li>
      </ul>
    ))}
  </>
);

TodoList.propTypes = todoListPropType;
