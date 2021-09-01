import React from 'react';
import { TodoItem } from '../TodoItem';
import { Todo } from '../../types/Todo';

import './TodoList.scss';

type Props = {
  todoList: Todo[],
};

export const TodoList: React.FC<Props> = (props) => {
  const { todoList } = props;

  return (
    <div className="TodoList">
      <h1 className="TodoList__title">Todo List</h1>
      {todoList.map(todoItem => {
        const todoNormalized: Omit<Todo, 'id'> = { ...todoItem };

        return (
          <TodoItem
            key={todoItem.id}
            todo={todoNormalized}
          />
        );
      })}
    </div>
  );
};
