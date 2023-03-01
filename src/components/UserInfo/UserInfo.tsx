import { Todo } from '../../types/Todo';

type Props = Pick<Todo, 'user'>;

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={'mailto:' + user?.email}>
    {user?.name}
  </a>
);
