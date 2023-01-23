import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

// Add the required types and props
type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <>
      <article
        className={classNames(
          'TodoInfo',
          { 'TodoInfo--completed': completed })}
        key={todo.id}
      >
        <h2 className="TodoInfo__title">
          {title}
        </h2>
        {user && <UserInfo user={user} />}
      </article>

    </>
  );
};
