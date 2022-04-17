import React from 'react';
import { Todo } from '../../types/Todo';
import TodoInfo from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type ListOfTodos = {
  todosArray: Todo[],
};

const TodoList: React.FC<ListOfTodos> = ({ todosArray }) => (
  <ul className="todoList">
    {todosArray.map(todoItem => {
      return (
        <>
          <li className="todoItem" key={todoItem.id}>
            <TodoInfo {...todoItem} />
          </li>
        </>
      );
    })}
  </ul>
);

export default TodoList;
