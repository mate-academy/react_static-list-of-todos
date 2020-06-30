import React from 'react';
import { Todo } from '../Todo/Todo';
import { TodoListShape } from '../Shape';

export const TodoList = ({ list }) => (
  list.map(item => <Todo key={item.id} {...item} />)
);

TodoList.propTypes = TodoListShape.isRequired;
