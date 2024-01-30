// Add the required types and props
export const UserInfo: React.FC<{ userId: number }> = ({ userId }) => {
  const user = usersFromServer.find((person) => person.id === userId);

  return (
    <a className="UserInfo" href={user?.email}>
      {user?.name}
    </a>
  );
};
