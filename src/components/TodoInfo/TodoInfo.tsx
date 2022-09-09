import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todoFromServ: Todo
};

export const TodoInfo: React.FC<Props> = ({ todoFromServ }) => {
  const {
    title,
    completed,
    user,
  } = todoFromServ;

  return (
    <article className={
      classNames('TodoInfo',
        {
          'TodoInfo--completed': completed,
        })
    }
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo userFromServ={user} />}
    </article>
  );
};
