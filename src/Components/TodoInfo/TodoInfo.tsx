import React from 'react';

type Props = {
  title: string;
  completed: boolean;
};

export const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <>
    <li className="list__item">{title}</li>
    <li className="list__item">
      <input type="checkbox" checked={completed} />
    </li>
  </>
);
