import React from 'react';
import { TodosInfo } from '../../Types/Todo';
import UserInfo from '../UserInfo/UserInfo';
import './Todoinfo.scss';

type Props = {
  todo: TodosInfo;
};

const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    {todo.user !== null ? <UserInfo user={todo.user} /> : null}

    <div className="todo">
      <h2 className="todo__title" data-cy="title">{todo.title}</h2>
      <p className="todo__status" data-cy="status">
        {todo.completed
          ? 'Done!'
          : 'Not completed!'}
      </p>
    </div>
  </>
);

export default TodoInfo;
