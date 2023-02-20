import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { email, name } = user;

  return (
    user && (
      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    )
  );
};
