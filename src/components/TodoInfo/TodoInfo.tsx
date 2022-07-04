import React from 'react';
import './TodoInfo.scss';

type Props = {
  userId: number,
  title: string,
  completed: boolean,
};

const TodoInfo: React.FC<Props> = ({ userId, title, completed }) => (
  <>
    <p>{`User: ${userId}`}</p>
    <p>{`Task: ${title}`}</p>
    <p>{`Status: ${completed ? 'Done' : 'Not done'}`}</p>
  </>
);

export default TodoInfo;
