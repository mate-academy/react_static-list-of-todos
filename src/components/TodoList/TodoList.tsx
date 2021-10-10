import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';
import './TodoList.scss';

type Props = Pick<Todo, 'user' | 'title' | 'completed'>;

export const TodoList:React.FC<Props> = ({
  user: userLink,
  title: titleTodo,
  completed: compleatedTodo,
}) => (
  <>
    <UserInfo
      name={userLink ? userLink.name : 'not found'}
      email={userLink ? userLink.email : 'not found'}
    />
    <TodoInfo
      title={titleTodo}
      completed={compleatedTodo}
    />
  </>
);
