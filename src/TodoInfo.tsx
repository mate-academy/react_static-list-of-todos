import React from 'react';

export const TodoInfo: React.FC<TodoInfo> = ({ completed, title }) => {
  return (
    <>
      <td>{title}</td>
      <td>{(completed) ? 'Yes' : 'No'}</td>
    </>
  );
};
