// eslint-disable-next-line
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: Todo
};
export const TodoInfo:React.FC<Props> = ({ todo }) => {
  if (todo.user) {
    return (
      <article className={classNames('TodoInfo',
        { 'TodoInfo--completed': todo.completed === true })}
      >
        <h2 className="TodoInfo__title">{todo.title}</h2>
        <UserInfo
          name={todo.user.name}
          email={todo.user.email}
        />
      </article>
    );
  }

  return null;
};
