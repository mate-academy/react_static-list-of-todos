import classNames from 'classnames';
import todos from '../../api/todos';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todosArray: Todo[];
};

export const TodoList:React.FC<Props> = ({ todosArray }) => (
  <>
    {todosArray.map((todo, index) => {
      return todo.user !== null
        ? (
          <div
            className={classNames('item', {
              item_true: todos[index].completed,
            })}
            key={todo.user.id}
          >
            <br />
            <UserInfo
              name={todo.user.name}
              username={todo.user.username}
              email={todo.user.email}
            />
            <TodoInfo
              title={todos[index].title}
              status={todos[index].completed}
            />
            <br />
          </div>
        )
        : null;
    })}
  </>
);
