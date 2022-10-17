import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type TodosItem = {
  todosItem: Todo[]
};

export const TodoList: React.FC<TodosItem> = ({ todosItem }) => (
  <section className="TodoList">
    {todosItem.map(todo => (
      <article
        key={todo.id}
        className={classNames(
          'TodoInfo',
          { 'TodoInfo--completed': todo.completed },
        )}
      >
        <UserInfo {...todo} />
      </article>
    ))}
  </section>
);
