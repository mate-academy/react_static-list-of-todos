import classNames from 'classnames';
import todos from '../../api/todos';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todosArray: Todo[];
};

export const TodoList:React.FC<Props> = ({ todosArray }) => (
  <>
    {todosArray.map((todo, index) => (
      todo.user && (
        <div
          className={classNames('item', {
            item_true: todos[index].completed,
          })}
          key={todo.user.id}
        >
          <br />
          <UserInfo prop={todo.user} />
          <TodoInfo todo={todo} />
          <br />
        </div>
      )
    ))}
  </>
);
