import React from 'react';
import { TodoTypes } from '../../types/TodoTypes';

type Props = {
  todoInfoList: TodoTypes
};

export const TodoInfo: React.FC<Props> = ({ todoInfoList }) => (
  <>
    <span className="todoList__userInfo">
      {todoInfoList.title}
    </span>
    <span className="todoList__userInfo">
      {todoInfoList.completed
        ? 'Done'
        : 'Active'}
    </span>
  </>
);
