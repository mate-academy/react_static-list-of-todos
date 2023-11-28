import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }: Props) => {
  const {
    name,
    email,
  } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
