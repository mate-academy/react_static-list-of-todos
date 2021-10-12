import React from 'react';
import './TodoInfo.scss';

type Props = {
  completed: boolean;
  title: string;
};
export const TodoInfo: React.FC<Props> = (({ completed, title }) => (
  <>
    <div className="listItem">{title}</div>
    <div className="listItem">{completed ? 'done' : 'unfinished'}</div>
  </>
));
