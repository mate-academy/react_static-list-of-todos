import { Todos } from '../../types/PropTypes';
import { UserInfo } from '../UserInfo';

type Props = {
  todoInfo: Todos;
};

export const TodoInfo: React.FC<Props> = ({ todoInfo }) => (
  <>
    <p>{todoInfo.title}</p>
    <p>{todoInfo.completed ? 'Completed' : 'Not completed'}</p>
    <p>{todoInfo.user && <UserInfo userInfo={todoInfo.user} />}</p>
  </>
);
