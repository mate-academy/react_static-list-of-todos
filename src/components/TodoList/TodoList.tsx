import React from 'react';
import { Todo } from '../../types/Todo';
import TodoInfo from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type ListOfTodos = {
  todos: Todo[],
};

const TodoList: React.FC<ListOfTodos> = ({ todos }) => (
  <ul className="todoList">
    {todos.map(todo => (
      <li className="todoItem" key={todo.id}>
        <TodoInfo {...todo} />
      </li>
    ))}
  </ul>
);

export default TodoList;
