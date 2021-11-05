import React from 'react';
import './ToDoInfo.scss';

interface Info {
  title: string,
  completed: boolean,
}

export const TodoInfo: React.FC<Info> = ({ title, completed }) => {
  const status = completed
    ? 'Completed'
    : 'Still in progress';

  return (
    <>
      <h2 className="title">
        {title}
      </h2>
      <div className="status">
        {`Status: ${status}`}
      </div>
    </>
  );
};
