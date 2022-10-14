import { User } from '../../types/User';

type Props = {
  title: string,
  user: User | null,
  completed: boolean;
};

export const TodoInfo: React.FC<Props> = ({ title, user, completed }) => (
  <article
    className={completed
      ? ('TodoInfo TodoInfo--completed')
      : ('TodoInfo')}
  >
    <h2 className="TodoInfo__title">{title}</h2>

    <a className="UserInfo" href={user?.email}>
      {user?.name}
    </a>
  </article>

);
