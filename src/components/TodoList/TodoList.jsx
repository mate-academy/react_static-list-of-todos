import React from 'react';
import './TodoList.scss';

import { Todo } from '../Todo';
import { TypeTodoList } from '../../types';

export function TodoList({ todos }) {
  const renderedList = todos.map((todo) => {
    const { completed, id, title, user } = todo;

    return ((
      <Todo
        key={id}
        completed={completed}
        title={title}
        user={user}
      />
    ));
  });

  return (
    <ul className="app__list">
      {renderedList}
    </ul>
  );
}

TodoList.propTypes = {
  todos: TypeTodoList.isRequired,
};
