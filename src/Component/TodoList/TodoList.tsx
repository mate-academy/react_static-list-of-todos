import React from 'react';
import { Todo } from '../../Type/Type';
import { TodoInfo } from '../TodoInfo';
import './Style.css';

type Props = {
  todos: Todo[];
};
export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <>
      <div className="page">
        <ul className="list">
          <li className="list-item">
            <span>User</span>
            <br />
            <span>Title</span>
            <br />
            <span>Status</span>
          </li>
          {todos.map((todo) => (
            <TodoInfo
              todos={todo}
              key={todo.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
