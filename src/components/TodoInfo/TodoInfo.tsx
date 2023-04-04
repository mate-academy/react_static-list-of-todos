import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};
// Add the required types and props
export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <article className="TodoInfo TodoInfo--completed">
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <a className="UserInfo" href={`mailto:${todo.user?.email}`}>
        {todo.user?.name}
      </a>
    </article>
  </>
);
