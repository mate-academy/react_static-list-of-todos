import React from 'react';
import { TodoItem } from '../TodoItem';

export const TodoList = props => (
  props.preparedTodos.map(
    item => (<TodoItem key={item.id} {...item} />),
  )
);
