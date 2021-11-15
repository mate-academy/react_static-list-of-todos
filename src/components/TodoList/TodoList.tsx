import { Todo } from '../../types/types';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todo: Todo[];
};

export const TodoList: React.FC<Props> = ({ todo }) => (
  <div className="TodoList">
    <ul className="TodoList__List">
      {todo.map(({
        id,
        title,
        completed,
        user,
      }) => {
        if (user) {
          return (
            <li key={id}>
              <TodoInfo
                title={title}
                completed={completed}
                user={user}
              />
            </li>
          );
        }

        return null;
      })}
    </ul>
  </div>
);
