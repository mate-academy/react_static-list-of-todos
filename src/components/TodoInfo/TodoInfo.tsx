import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo
};

const classTodoInfo = 'TodoInfo';
const comletedTrue = 'TodoInfo--completed';

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <article className={
      todo.completed
        ? (`${classTodoInfo} ${comletedTrue}`)
        : classTodoInfo
    }
    >
      <h2 className="TodoInfo__title">
        {todo.title}
      </h2>
      {
        todo.user
          ? <UserInfo user={todo.user} />
          : null
      }
    </article>
  </>
);
