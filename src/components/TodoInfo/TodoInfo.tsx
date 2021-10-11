import React from 'react';
import { PreparedTodosType } from '../../types/PreparedTodosType';

type Props = {
  todoInfoList: PreparedTodosType;
};

export const TodoInfo: React.FC<Props> = ({ todoInfoList }) => (
  <>
    <span className="todo-list__user-info">
      {todoInfoList.title}
    </span>
    <span className="todo-list__user-info">
      {todoInfoList.completed
        ? 'Done'
        : 'In Progres'}
    </span>
  </>
);
