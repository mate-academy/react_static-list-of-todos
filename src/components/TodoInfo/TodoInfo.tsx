import { Todo } from '../../types/Todo';

interface Props {
  todo: Todo;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    title,
    user,
  } = todo;

  return (
    <>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && (
        <a className="UserInfo" href={`mailto:${user?.email}`}>
          {user?.name}
        </a>
      )}
    </>
  );
};
