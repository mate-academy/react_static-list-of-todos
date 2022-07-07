import React from 'react';

type Props = {
  title: string,
  completed: boolean,
  userId: number,
};

export const TodoInfo: React.FC<Props> = ({ title, completed, userId }) => (
  <>
    <div className="todo-info">
      {`Task: ${title}`}
    </div>

    <div className="todo-info" data-cy="status">
      {`Status: ${completed ? 'Done' : 'In progress'}`}
    </div>

    <div className="todo-info">
      {`User: ${userId}`}
    </div>
  </>
);
