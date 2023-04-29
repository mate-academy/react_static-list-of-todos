import React from 'react';
import classNames from 'classnames';
import { TodoInfo } from '../TodoInfo';
import { TodoListType } from '../../types/Todo';

export const TodoList:React.FC<TodoListType> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <article
      className={classNames(
        'TodoInfo',
        {
          'TodoInfo--completed': todo.completed,
        },
      )}
      key={todo.id}
    >
      <TodoInfo todo={todo} />
    </article>
    ))}
  </section>
);
