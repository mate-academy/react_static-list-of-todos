import React from 'react';

import './TodoInfo.scss';

type Props = {
  title: string,
  completed: boolean,
  userId: number,
};

const TodoInfo: React.FC<Props> = ({ title, completed, userId }) => (
  <>
    <div className="todo-info">{`Task: ${title}`}</div>
    <div className="todo-info" data-cy="status">{`Status: ${completed ? 'Done' : 'In progress'}`}</div>
    <div className="todo-info">{`User: ${userId}`}</div>
  </>
);

export default TodoInfo;
