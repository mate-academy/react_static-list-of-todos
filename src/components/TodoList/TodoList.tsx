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
      <li key={todo.id}>
        {todo.user && (
          <UserInfo
            person={todo.user}
          />
        )}
        <TodoInfo
          todo={todo}
        />
      </li>
    ))}
  </ul>
);
// Add a default export statement for TodoInfo component to use it in the other files
