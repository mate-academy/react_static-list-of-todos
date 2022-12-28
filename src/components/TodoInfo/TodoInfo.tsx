import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const getUser = () => {
    if (todo.user) {
      return (
        <article className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}>
          <h2 className="TodoInfo__title">{ todo.title }</h2>

          <UserInfo user={todo.user} />
        </article>
      );
    }

    return (
      <article className="TodoInfo TodoInfo--completed">
        <h2 className="TodoInfo__title">{ todo.title }</h2>
      </article>
    );
  };

  return (
    getUser()
  );
};
