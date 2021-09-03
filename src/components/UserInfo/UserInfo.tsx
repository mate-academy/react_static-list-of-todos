type Props = {
  prop: User;
};

export const UserInfo: React.FC<Props> = ({ prop }) => {
  const { name, username, email } = prop;

  return (
    <>
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
    </>
  );
};
