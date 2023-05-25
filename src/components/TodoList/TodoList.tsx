import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  data: Todo[];
};

export const TodoList: React.FC<Props> = ({ data }) => {
  return (
    <section className="TodoList">
      {data.map(todoItem => {
        if (todoItem.completed) {
          return (
            <article className="TodoInfo TodoInfo--completed" key={todoItem.id}>
              <TodoInfo {...todoItem} />
            </article>
          );
        }

        return (
          <article className="TodoInfo" key={todoItem.id}>
            <TodoInfo {...todoItem} />
          </article>
        );
      })}
    </section>
  );
};
