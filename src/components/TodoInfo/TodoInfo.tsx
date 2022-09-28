// Add the required types and props
import Classnames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type TodoInfoProps = {
  todo: Todo,
};

export const TodoInfo: React.FC<TodoInfoProps> = ({ todo }) => {
  const { completed, title, user } = todo;

  return (
    <>
      <article className={Classnames(
        'TodoInfo',
        { completed },
      )}
      >

        <h2 className="TodoInfo__title">{title}</h2>
        {user && (<UserInfo user={user} />)}
      </article>
    </>
  );
};
