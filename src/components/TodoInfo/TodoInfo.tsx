import React from 'react';
import { Todo } from '../../types/Todo';

export type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="ui inverted top attached header" data-cy="title">
    {`To Do: ${todo.title}`}
    <div className="ui divider" />
    <p>{`Status - ${todo.completed ? 'Complete' : 'In progress'}`}</p>
  </div>
);
