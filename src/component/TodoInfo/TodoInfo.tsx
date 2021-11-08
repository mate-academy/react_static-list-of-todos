import { TodoWithUser } from '../../types/types';
import { UserInfo } from '../UserInfo/UserInfo';

import './TodoInfo.scss';

interface Props {
  todo: TodoWithUser
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <>
      <h2 className="todo-info__title">{title}</h2>

      {user && (
        <p>
          <UserInfo user={user} />
        </p>
      )}

      <p className="todo-info__status">
        {`${completed ? 'Completed✅' : 'In progress...⏳'}`}
      </p>
    </>
  );
};
