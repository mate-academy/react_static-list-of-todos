import classNames from 'classnames';
import { Todos } from '../../types/Todos';
import { UserInfo } from '../UserInfo';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

type Props = {
  preparedTodos: Todos[];
};

export const TodoList: React.FC<Props> = (props) => {
  // eslint-disable-next-line no-console
  console.log(props.preparedTodos);
  const { preparedTodos } = props;

  return (
    <ul className="TodoList">
      <li className="TodoList_Header">
        <div>User Info</div>
        <div>Title</div>
        <div>Status</div>
      </li>
      {
        preparedTodos.map(todo => {
          return (
            <li
              key={todo.id}
              className={classNames('TodoList_Item', {
                'TodoList_Item--Done': todo.completed,
              })}
            >
              <div>
                {todo.user && <UserInfo user={todo.user} />}
              </div>
              <TodoInfo completed={todo.completed} title={todo.title} />
            </li>
          );
        })
      }
    </ul>
  );
};
