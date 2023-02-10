import { User } from '../../types/User';

// Add the required types and props
export const UserInfo = ({ user }: { user: User }) => {
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
