import React from 'react';
import { Todo } from '../../react-app-env';

import './TodoInfo.scss';

type Props = Todo;

const TodoInfo: React.FC<Props> = ({ title, completed, userId }) => (
  <>
    <div className="todo-info">{`Task: ${title}`}</div>
    <div className="todo-info" data-cy="status">{`Status: ${completed ? 'Done' : 'In progress'}`}</div>
    <div className="todo-info">{`User: ${userId}`}</div>
  </>
);

export default TodoInfo;
