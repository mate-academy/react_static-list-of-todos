import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Prop = {
  todos: Todo[],
};

export const TodoList: React.FC<Prop> = ({ todos }) => (
  <>
    <section className="TodoList">
      {todos.map(todo => (
        <React.Fragment key={todo.id}>
          <TodoInfo todo={todo} />
        </React.Fragment>
      ))}
    </section>
  </>
);
