import React from 'react';

type Info = {
  title: string;
  completed: boolean;
};

export const TodoInfo: React.FC<Info> = ({ title, completed }) => {
  const status = completed
    ? 'todo-list__status todo-list__status--done'
    : 'todo-list__status todo-list__status--progress';

  return (
    <>
      <h1 className="todo-list__title" data-cy="title">{title}</h1>
      <h3 className={`${status}`} data-cy="status">
        {completed ? 'Done' : 'In progress'}
      </h3>
    </>
  );
};
