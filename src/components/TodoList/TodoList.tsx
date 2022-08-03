import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface Props {
  todos: Todo[]
}

export const TodoList:React.FC<Props> = ({ todos }) => (
  <>
    {todos.map(item => (
      <TodoInfo todo={item} key={item.id} />
    ))}
  </>
);
