import React from 'react';
import './TodoInfo.scss';

interface Props {
  title: string,
  completed: boolean,
}

export const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <>
    <div data-cy="title">{title}</div>
    <div
      data-cy="status"
      className={`${completed
        ? 'Complected'
        : 'Complected-false'}`}
    >
      {`Сompleted: ${completed}`}
    </div>
  </>
);
