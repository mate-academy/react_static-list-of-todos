// import React from 'react';
// import { TodoInfo } from '../TodoInfo/TodoInfo';
// import { Todo } from '../../types/Todo';
import Todos from '../../api/todos';
import Users from '../../api/users';

export const TodoList = () => (

  <section className="TodoList">
    {Todos.map(task => {
      const name = Users.find(user => user.id === task.userId);

      return (
        <article className={task.completed
          ? 'TodoInfo TodoInfo--completed'
          : 'TodoInfo'}
        >
          <h2 className="TodoInfo__title">{task.title}</h2>
          <a className="UserInfo" href={`mailto:${name?.email}`}>
            {name?.name}
          </a>
        </article>
      );
    })}
  </section>
);
