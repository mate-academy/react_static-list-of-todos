import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todoItem: Todo
};

export const TodoInfo: React.FC<Props> = ({ todoItem }) => (
  <>
    <h2 className="card-header-title">{todoItem.title}</h2>
    <div className="card-content">
      <p className={todoItem.completed ? 'subtitle green' : ' subtitle red'}>
        {todoItem.completed ? 'Done' : 'Not done'}
      </p>
      {todoItem.user && <UserInfo user={todoItem.user} />}
    </div>
  </>
);
