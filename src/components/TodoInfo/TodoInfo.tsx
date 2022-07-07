import React from 'react';

type Props = {
  title: string,
  completed: boolean,
};

const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <>
    <h2 data-cy="title">{title}</h2>
    <p data-cy="status">
      {completed
        ? 'Complited'
        : 'The task is not finished'}
    </p>
  </>
);

export default TodoInfo;
