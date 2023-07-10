import React from 'react';
import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type PropsTodoList = {
  todos: Todo[];
};

export const TodoList: React.FC<PropsTodoList> = ({ todos = [] }) => (
  <article className="TodoList">
    { todos.map(todo => (
      <TodoInfo
        todo={todo}
        key={todo.id}
      />
    ))}
  </article>
);
