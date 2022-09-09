import { User } from '../../types/User';

type Props = {
  userFromServ: User;
};

export const UserInfo: React.FC<Props> = ({ userFromServ }) => {
  const {
    name,
    email,
  } = userFromServ;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
