import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todo as TodoType } from '../../types/Todo';

interface Props {
  todos: TodoType[];
}

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo
        key={todo.id}
        todo={todo}
      />
    ))}

  </section>
);
