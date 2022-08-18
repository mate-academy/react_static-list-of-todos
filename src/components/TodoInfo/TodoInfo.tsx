import { UserInfo } from '../UserInfo/UserInfo';

// Add the required types and props

import { Todo } from '../../types/Todo';
import { User } from '../../types/User';

type Props = {
  todo: Todo,
  users: User[],
};

export const TodoInfo:React.FC<Props> = ({ todo, users }) => (
  <>

    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo users={users} />
  </>
);
