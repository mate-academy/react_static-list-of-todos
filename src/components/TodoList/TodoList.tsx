import classNames from 'classnames';
import './TodoList.scss';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/index';
import { TodoInfo } from '../TodoInfo/index';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => {
  return (
    <ul className="list">
      {preparedTodos.map(todo => (
        <li
          key={todo.id}
          className={classNames('list__item', { 'list__item--done': todo.completed })}
        >
          {todo.user && <UserInfo user={todo.user} />}
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  );
};
