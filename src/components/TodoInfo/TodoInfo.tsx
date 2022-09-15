// Add the required types and props
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type TodoInfoType = {
  todoInfo: Todo,
};

export const TodoInfo: React.FC<TodoInfoType> = ({ todoInfo }) => (
  <>
    <article className={`TodoInfo ${todoInfo.completed
      ? 'TodoInfo--completed'
      : ''}`}
    >

      <h2 className="TodoInfo__title">{todoInfo.title}</h2>
      {todoInfo.user !== null
        ? <UserInfo userInfo={todoInfo.user} />
        : null}
    </article>
  </>
);
