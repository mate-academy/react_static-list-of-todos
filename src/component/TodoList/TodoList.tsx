import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <>
    {todos.map((todo) => (
      <div
        className="user"
        key={todo.id}
      >
        {todo.user && (
          <div className="user-info">
            <UserInfo
              name={todo.user.name}
              email={todo.user.email}
            />
          </div>
        )}
        <br />
        <div className="todo-info">
          <TodoInfo
            title={todo.title}
            completed={todo.completed}
          />
        </div>
      </div>
    ))}
  </>
);
