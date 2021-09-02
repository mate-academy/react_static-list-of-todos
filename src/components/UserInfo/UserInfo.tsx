type Props = Pick<User, 'name' | 'username' | 'email'>;

export const UserInfo: React.FC<Props> = ({ name, username, email }) => (
  <>
    <p>{name}</p>
    <p>{username}</p>
    <p>{email}</p>
  </>
);
