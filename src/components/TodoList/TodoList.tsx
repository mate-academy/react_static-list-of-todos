import classNames from 'classnames';
import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => {
      const { completed, id, title, user } = todo;

      return (
      <li
        className={classNames(
          'TodoInfo',
          {
            'TodoInfo--completed': completed,
          },
        )}
        key={id}
      >
        <TodoInfo
          title={title}
          user={user}
        />
      </li>
    )})}
  </ul>
);
