import { UserInfo } from '../UserInfo';
import { TodoInfo } from '../TodoInfo';
import { PreparedType } from '../../types/pdTypes';

type Props = {
  array: PreparedType[];
};

export const TodoList: React.FC<Props> = ({ array }) => {
  return (
    <div className="Block">
      {array.map(item => {
        return (
          <div key={item.user.id} className="Card">
            <UserInfo {...item.user} />
            <TodoInfo todo={item.todo} />
          </div>
        );
      })}
    </div>
  );
};
