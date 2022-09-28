import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    id,
    title,
    completed,
    user,
  } = todo;

  return (
    <>
      <li
        className={completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}
        key={id}
      >
        <h2 className="TodoInfo__title">
          {title}
        </h2>
        {user && <UserInfo user={user} />}
      </li>
    </>
  );
};
