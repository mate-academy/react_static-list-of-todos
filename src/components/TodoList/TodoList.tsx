import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface Props {
  todos: Todo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map((todo: Todo) => {
        return <TodoInfo todo={todo} key={todo.id} />;
      })}
    </>
  );
};
