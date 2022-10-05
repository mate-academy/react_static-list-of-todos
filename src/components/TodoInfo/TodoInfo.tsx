import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }, { key }) => {
  const { completed, title, user } = todo;

  return (
    <>
      <article
        className={
          classNames('TodoInfo',
            { 'TodoInfo--completed': completed === true })
        }
        key={key}
      >
        <h2 className="TodoInfo__title">
          {title}
        </h2>

        {user && <UserInfo human={user} />}
      </article>
    </>
  );
};
