import React from 'react';
import { Todo } from '../Todo';
import { TodoListType } from '../../types';

export function TodoList({ list }) {
  return (
    <ul className="to-do">
      {list.map(todo => <Todo {...todo} />)}
    </ul>
  );
}

TodoList.propTypes = TodoListType;
