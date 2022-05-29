import React from 'react';
import { TodoInfo } from '../TodoInfo';
import { TodoWidthUser } from '../../react-app-env';
import './TodoList.scss';

type Props = {
  todosWidthUser: TodoWidthUser[];
};

export const TodoList: React.FC<Props> = ({ todosWidthUser }) => (
  <div className="container">
    <h1 className="mainTitle">
      TODOLIST
    </h1>

    <ul className="todoListUser">
      {todosWidthUser.map(todoWidthUser => (
        <React.Fragment key={todoWidthUser.id}>
          <TodoInfo todoWidthUser={todoWidthUser} />
        </React.Fragment>
      ))}
    </ul>
  </div>
);
