import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface Props {
  todos: Todo[];
}

export const TodoList: React.FC<Props> = ({
  todos,
}) => (
  <section className="TodoList">
    {todos.map((todo) => {
      const {
        completed,
        id,
      } = todo;

      return (
        <article
          className={classNames('TodoInfo', {
            'TodoInfo--completed': completed,
          })}
          key={id}
        >
          <TodoInfo todo={todo} />
        </article>
      );
    })}
  </section>
);
