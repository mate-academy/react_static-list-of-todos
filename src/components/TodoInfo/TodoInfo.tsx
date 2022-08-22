import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <li
      key={todo.id}
      className={
        classNames('TodoInfo',
          { 'TodoInfo TodoInfo--completed': todo.completed })
      }
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} />
    </li>
  </>
);
