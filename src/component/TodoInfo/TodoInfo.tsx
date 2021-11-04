import { TodoFull } from '../../types/types';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: TodoFull
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <>
      <h2>{title}</h2>

      {user && (
        <p>
          <UserInfo user={user} />
        </p>
      )}

      <p>
        {`Status: ${completed ? 'Completed' : 'In progress'}`}
      </p>
    </>
  );
};
