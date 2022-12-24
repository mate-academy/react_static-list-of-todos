import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <>
    <section className="TodoList">
      {todos.map(todo => {
        const { completed, id } = todo;

        return (
          <article
            className={`TodoInfo ${completed && 'TodoInfo--completed'}`}
            key={id}
          >
            <TodoInfo todo={todo} />
          </article>
        );
      })}
    </section>
  </>
);
