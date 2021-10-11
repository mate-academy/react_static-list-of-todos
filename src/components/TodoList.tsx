import React from 'react';
import './TodoList.scss';
import { TodoInfo } from './TodoInfo';
import { GetInfo } from './GetInfo';
import { Todo } from '../types/Type';

type TodosUsers = {
  todosUsers: Todo[];
};

export const TodoList: React.FC<TodosUsers> = ({ todosUsers }) => (
  <>
    <div className="ListStyle">
      {todosUsers.map(todo => (
        <div className="TodoStyle">
          <span className="TodoTitle">
            <GetInfo propsInfo={todo.title} />
          </span>
          <span className="UserInfo">
            <GetInfo propsInfo={todo.user?.name || null} />
          </span>
          <span className="UserInfo">
            <GetInfo propsInfo={todo.user?.email || null} />
          </span>
          <span className="TodoDone">
            <TodoInfo propsInfo={todo.completed} />
          </span>
        </div>
      ))}
    </div>
  </>
);
