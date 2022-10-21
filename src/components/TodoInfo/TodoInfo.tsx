import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type PropsInfo = {
  todo: Todo;
};

export const TodoInfo:React.FC<PropsInfo> = ({ todo }) => {
  const {
    title,
    user,
  } = todo;

  return (
    <>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && (
        <UserInfo user={user} />
      )}
    </>
  );
};
