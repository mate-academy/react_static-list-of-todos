// Add the required types and props
import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type TodosProps = {
  todos: Todo[];
};

export const TodoList: React.FC<TodosProps> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map((todo) => (<TodoInfo todo={todo} key={todo.id} />))}
  </ul>
);
