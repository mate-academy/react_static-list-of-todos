// import Reat from 'react';
import { UserInfo } from './UserInfo';
import { Todo } from '../Types/Todo';
import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <>
      <div className="todoTitle">
        <h3 className="todoTitle__title">{`Todo: ${todo.title}`}</h3>
        <div className="todoTitle__completed">
          {todo.completed ? 'Completed' : 'Not Completed'}
        </div>
      </div>
      {todo.user && <UserInfo user={todo.user} />}
    </>
  );
};
