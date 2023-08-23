import users from '../../api/users';

export const UserInfo = ({ userId }: { userId: number }) => {
  const currentUser = users.find(user => userId === user.id);

  if (currentUser) {
    return (
      <a className="UserInfo" href={`mailto:${currentUser.email}`}>
        {currentUser.name}
      </a>
    );
  }

  return null;
};
