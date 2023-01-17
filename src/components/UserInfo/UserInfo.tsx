import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    name = 'Leanne Graham',
    email,
  } = user;

  return (
    <>
      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </>
  );
};
