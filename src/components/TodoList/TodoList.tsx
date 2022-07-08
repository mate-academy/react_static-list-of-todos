import React from 'react';
import { Todo } from '../../type/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoList.scss';

type Props = {
  listTodoWithUser: Todo [];
};

export const TodoList: React.FC <Props> = ({ listTodoWithUser }) => (
  <>
    {listTodoWithUser.map(todo => (
      <div
        className={`${todo.completed ? 'card indicator-true' : 'card indicator-fasle'}`}
        key={todo.id}
      >
        <UserInfo
          user={todo.user}
          completed={todo.completed}
        />

        <TodoInfo todo={todo} />
      </div>
    ))}
  </>
);

export default TodoList;
