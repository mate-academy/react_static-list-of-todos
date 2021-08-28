import React from 'react';
import classNames from 'classnames';
import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <div className="list-group">
    {todos.map(todo => (
      <div
        className={classNames(
          {
            'list-group-item': true,
            'list-group-item-action': true,
            'list-group-item-success': todo.completed,
            'list-group-item-danger': !todo.completed,
          },
        )}
        key={todo.id}
      >
        <TodoItem {...todo} />
      </div>
    ))}
  </div>
);
