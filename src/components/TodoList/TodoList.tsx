import React from 'react';
import { TodoItem } from '../TodoItem';
import { Todo } from '../../types/Todo';

import './TodoList.scss';

type Props = {
  todoList: Todo[],
};

export const TodoList: React.FC<Props> = ({ todoList }) => (
  <div className="TodoList">
    <h1 className="TodoList__title">Todo List</h1>
    {todoList.map(todoItem => (
      <TodoItem
        key={todoItem.id}
        title={todoItem.title}
        completed={todoItem.completed}
        user={todoItem.user}
      />
    ))}
  </div>
);
