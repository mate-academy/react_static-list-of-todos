import { Todo } from '../../types/Todo';

interface Props {
  todoProp: Todo;
}

export const TodoInfo: React.FC<Props> = ({ todoProp }) => {
  const {
    title,
    user,
  } = todoProp;

  const userInfo = user && (
    <a className="UserInfo" href={`mailto:${user?.email}`}>
      {user?.name}
    </a>
  );

  return (
    <>
      <h2 className="TodoInfo__title">{title}</h2>
      {userInfo}
    </>
  );
};
