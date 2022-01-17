import React from 'react';
import './TodoList.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type ListOfTodos = {
  todos: Todos[]
};

export const TodoList: React.FC<ListOfTodos> = ({ todos }) => (
  <div className="todo">
    <ul className="todo_list">
      {todos.map(todo => (
        <div className="todo_item" key={todo.id}>
          <UserInfo user={todo.user} />
          <TodoInfo todo={todo} />
        </div>
      ))}
    </ul>
  </div>

);
