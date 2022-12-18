import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <>
    <section className="TodoList">
      {todos.map(todo => (
        <article
          className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}
          key={todo.id}
        >
          <TodoInfo data={todo} />
        </article>
      ))}
    </section>
  </>
);
