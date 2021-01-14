import React from 'react';
import { Todo } from '../Todo/Todo';
import { checkPropTypesTodo } from '../checkPropTypes/checkPropTypesTodo';

export const TodoList = ({ preparedTodos }) => (
  <ul className="list">
    {preparedTodos.map(todo => (
      <Todo {...todo} key={todo.id} />
    ))}
  </ul>
);

TodoList.propTypes = checkPropTypesTodo;
