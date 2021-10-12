import React from 'react';
import './TodoList.scss';
import { GetInfo } from './GetInfo';
import { Todo } from '../types/Type';

type TodosUsers = {
  todosUsers: Todo[];
};

export const TodoList: React.FC<TodosUsers> = ({ todosUsers }) => (
  <>
    <div className="ListStyle">
      {todosUsers.map(todo => (
        <div className="TodoStyle" key={todo.id}>
          <span className="TodoTitle">
            <GetInfo propsInfo={todo.title} />
          </span>
          <span className="Info">
            <GetInfo propsInfo={todo.user?.name || null} />
          </span>
          <span className="Info">
            <GetInfo propsInfo={todo.user?.email || null} />
          </span>
          <span className="Info">
            <GetInfo propsInfo={(todo.completed) ? 'done' : 'in process'} />
          </span>
        </div>
      ))}
    </div>
  </>
);
