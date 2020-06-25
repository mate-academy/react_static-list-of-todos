import React from 'react';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ list }) => (
  list.map(item => <Todo key={item.id} {...item} />)
);
