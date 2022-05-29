// Don't forget to import the React library
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { AllTodos } from '../../react-app-env';

type Props = {
  todosArray: AllTodos[],
};

export const TodoList: React.FC<Props> = ({ todosArray }) => (
  <ul>
    {todosArray.map(todo => (
      <li>
        <UserInfo
          name={todo.user ? todo.user.name : 'Elvis has left the bilding'}
          email={todo.user?.email || 'Nobody home'}
        />
        <TodoInfo
          title={todo.title}
          completed={todo.completed}
        />
      </li>
    ))}
  </ul>
);
// Add a default export statement for TodoInfo component to use it in the other files
