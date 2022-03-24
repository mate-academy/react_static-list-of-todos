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
        <UserInfo userData={item.user} />
        <TodoInfo
          title={item.title}
          completed={item.completed}
        />
      </li>
    ))}
  </ul>
);
