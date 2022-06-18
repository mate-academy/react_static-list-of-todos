type User = {
  user: {
    name: string,
    email: string,
  } | null,
};

export const UserInfo: React.FC<User> = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <>
      <p data-cy="username">{`Name: ${user.name}`}</p>
      <p data-cy="email">{`Email: ${user.email}`}</p>
    </>
  );
};
