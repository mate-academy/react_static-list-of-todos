import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

interface Props {
  todos: Todo[]
}

export const TodoList: React.FC<Props> = ({ todos }) => (
  <main className="main">
    {todos.map(todo => (
      <section
        className={classNames(
          'card',
          {
            card__active: todo.completed,
          },
        )}
        key={todo.id}
      >
        <TodoInfo todo={todo} />
      </section>
    ))}
  </main>
);
