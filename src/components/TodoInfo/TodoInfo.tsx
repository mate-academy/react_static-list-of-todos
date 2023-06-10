import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo:Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { completed, title, user } = todo;
  const todoInfoClassName = `TodoInfo ${completed && 'TodoInfo--completed'}`;

  return (
    <>
      <article className={todoInfoClassName}>
        <h2 className="TodoInfo__title">{title}</h2>

        {user && <UserInfo user={user} />}
      </article>
    </>
  );
};
