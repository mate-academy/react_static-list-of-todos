import { Todo } from '../types/Todo';
import { UserInfo } from './UserInfo';
import { TodoInfo } from './TodoInfo';

type Props = {
  listOfToDos: Todo[]
};

export const TodoList: React.FC<Props> = ({ listOfToDos }) => (
  <ul>
    {listOfToDos.map(item => (
      <li key={item.id}>
        {item.user && item.user
          ? (
            <UserInfo userData={item.user} />
          )
          : (
            <p>
              No user data
            </p>
          )}
        <TodoInfo
          title={item.title}
          completed={item.completed}
        />
      </li>
    ))}
  </ul>
);
