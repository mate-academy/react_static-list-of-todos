// Add the required types and props
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }, { key }) => (
  <>
    <article
      className={
        `TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`
      }
      key={key}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} />
    </article>
  </>
);
