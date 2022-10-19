import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type PropsInfo = {
  todo: Todo;
};

export const TodoInfo:React.FC<PropsInfo> = ({ todo }) => (
  <>
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo />
  </>
);
