import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todos: Todo[]
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {
      todos.map(todo => (
        <li>
          <div>
            <TodoInfo
              title={todo.title}
              completed={todo.completed}
              user={todo.user}
            />
          </div>
          {todo.user && (
            <div>
              <UserInfo
                name={todo.user.name}
                email={todo.user.email}
              />
            </div>
          )}

        </li>
      ))
    }
  </ul>
);
