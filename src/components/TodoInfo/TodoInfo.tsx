import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';
import './TodoInfo.scss';

type Props = {
  todoI: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todoI }) => (
  <article className={`TodoInfo ${todoI.completed ? 'TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">
      {todoI.title}
    </h2>

    {todoI.user && <UserInfo user={todoI.user} />}
  </article>
);
