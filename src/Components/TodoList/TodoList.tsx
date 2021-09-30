import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todo } from '../../Types/Todo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <>
    <div className="list__head">
      <ul className="list__field list__field--title">
        <li className="list__item">Name</li>
        <li className="list__item">E-mail</li>
        <li className="list__item">Todo</li>
        <li className="list__item">Status</li>
      </ul>
    </div>
    <div className="list__body">
      {todos.map(todo => (
        <ul className="list__field" key={todo.id}>
          {todo.person && <UserInfo person={todo.person} />}
          <TodoInfo {...todo} />
        </ul>
      ))}
    </div>
  </>
);
