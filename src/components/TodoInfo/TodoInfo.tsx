// import { UserInfo } from '../UserInfo/UserInfo';
// import { Todo } from '../../types/Todo';
// import { User } from '../../types/User';

// type Props = {
//   todo: Todo,
//   users: User[],
// };

// export const TodoInfo:React.FC<Props> = ({ todo, users }) => (
//   <>

//     <h2 className="TodoInfo__title">{todo.title}</h2>

//     <UserInfo users={users} />
//   </>
// );

import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <UserInfo user={todo.user} />
  </>
);
