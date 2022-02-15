import React from 'react';
import TodoInfo from './TodoInfo';
import './TodoList.scss';
import { NewItem } from './interface/interface';

type Prop = {
  preparedTodos: NewItem[];
};

const TodoList: React.FC<Prop> = ({ preparedTodos }) => {
  return (
    <ul className="todoList">
      {preparedTodos.map((todo) => {
        return (
          <li key={todo.id}>
            <TodoInfo todoshka={todo} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
