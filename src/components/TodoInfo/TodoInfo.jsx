import cn from 'classnames';
import { UserInfo } from '../UserInfo';
// Add the required props
export const TodoInfo = ({ todo }) => (
  <li className={cn(
    'TodoInfo',
    { 'TodoInfo--completed': todo.completed },
  )}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo.user} />
    {/* <a className="UserInfo" href={`mailto: ${todo.user.email}`}>
      {todo.user.name}
    </a> */}
  </li>
);
