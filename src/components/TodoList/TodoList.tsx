import React from 'react';
import { Todo } from '../../types/types';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

interface Props {
  todos: Todo[]
}

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todoList">
    {
      todos.map((todo) => (
        <TodoInfo todo={todo} key={todo.id} />
      ))
    }
  </ul>
);
