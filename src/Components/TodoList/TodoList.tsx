import React from 'react';
import './TodoList.scss';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { TodosItem } from '../../types/TodosItem';

type TodosList = {
  todos: TodosItem[],
};

export const TodoList: React.FC <TodosList> = ({ todos }) => (
  <ul className="toDoList">
    {todos.map(todo => (
      <TodoInfo doItem={todo} key={todo.id} />
    ))}
  </ul>
);
