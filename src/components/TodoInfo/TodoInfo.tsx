import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    user,
    title,
    completed,
  } = todo;

  return (
    <>
      <article
        className={`TodoInfo${completed ? ' TodoInfo--completed' : ''}`}
      >
        <h2 className="TodoInfo__title">{title}</h2>

        <UserInfo user={user} />
      </article>
    </>
  );
};
