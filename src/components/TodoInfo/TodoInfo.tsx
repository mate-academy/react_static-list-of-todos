import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

export const TodoInfo: React.FC<Todo> = ({ user, title }) => (
  <>
    <h2 className="TodoInfo__title">{title}</h2>
    {user === null ? <></> : <UserInfo {...user} />}
  </>
);
