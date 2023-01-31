import { User } from '../../types/User';

type Props = {
  title: string;
  user: User;
};

export const UserInfo: React.FC<Props> = ({ title, user }) => (
  <>
    <h2 className="TodoInfo__title">{title}</h2>
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {`${user.name}`}
    </a>
  </>

);
