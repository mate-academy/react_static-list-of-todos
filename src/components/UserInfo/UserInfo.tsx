import { User } from '../../types/User';

type Props = {
  human: User;
};

export const UserInfo: React.FC<Props> = ({ human }) => {
  const { email, name } = human;

  return (
    <a
      className="UserInfo"
      href={`mailto:${email}`}
    >
      {name}
    </a>
  );
};
