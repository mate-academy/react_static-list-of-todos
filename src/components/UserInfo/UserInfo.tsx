import { User } from '../../types/User';

type Props = {
  person: User;
};

export const UserInfo: React.FC<Props> = ({ person }) => {
  const { name, email } = person;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
