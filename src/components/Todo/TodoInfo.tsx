import { UserInfo } from '../User/UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { todo } = props;
  const { user, title, completed } = todo;

  return (
    <>
      {user && <UserInfo user={user} />}
      <td>{title}</td>
      <td>
        {
          completed
            ? 'Done'
            : 'In progress'
        }
      </td>
    </>
  );
};
