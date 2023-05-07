import cn from 'classnames';
import { Todo } from '../../types/Todo';

interface TodoInfoProps {
  todoInfo: Todo
}

export const TodoInfo: React.FC<TodoInfoProps> = ({
  todoInfo: {
    id, title, user, userId, completed,
  },
}) => {
  const className = cn({
    TodoInfo: true,
    'TodoInfo--completed': completed,
  });

  return (
    <article className={className}>
      <h2 className="TodoInfo__title">{title}</h2>

      <a className="UserInfo" href="mailto:Sincere@april.biz">
        Leanne Graham
      </a>
    </article>
  );
};
