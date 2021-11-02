import React from 'react';
import './TodoInfo.scss';

type Props = {
  title: string,
  completed: boolean,
};

export const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <>
    <p>{title}</p>
    <p>{completed}</p>
  </>
);
