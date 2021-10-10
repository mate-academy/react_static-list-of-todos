import React from 'react';
import { Todo } from '../types/todo';

type Props = {
  todoInfoList: Todo
};

export const TodoInfo: React.FC<Props> = ({ todoInfoList }) => (
  <>
    <span className="todoList__userInfo">
      {todoInfoList.title}
    </span>
    <span className="todoList__userInfo">
      {todoInfoList.completed
        ? 'Completed'
        : 'In progress'}
    </span>
  </>
);
