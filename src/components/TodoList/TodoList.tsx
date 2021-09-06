import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todosArray: Todo[];
};

export const TodoList:React.FC<Props> = ({ todosArray }) => (
  <div>
    {todosArray.map((todo) => (
      (
        <div
          className={classNames('item', {
            completed: todo.completed,
          })}
          key={todo.id}
        >
          <br />
          {todo.user && <UserInfo prop={todo.user} />}
          {todo.user && <TodoInfo todo={todo} />}
          <br />
        </div>
      )
    ))}
  </div>
);
