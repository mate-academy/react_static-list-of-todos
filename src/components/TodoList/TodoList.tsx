import React from 'react';
import classNames from 'classnames';

import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos = [] }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <article
        key={todo.id}
        className={classNames(
          'TodoInfo',
          {
            'TodoInfo--completed': todo.completed,
          },
        )}
      > 
        <h2 className="TodoInfo__title">
          <TodoInfo title={todo.title} />
        </h2>        

        {todo.user && (
          <a className="UserInfo" href={`#${todo.user.email}`}>
            <UserInfo user={todo.user} />
          </a>  
        )}

      </article>
    ))}
  </section>
);
