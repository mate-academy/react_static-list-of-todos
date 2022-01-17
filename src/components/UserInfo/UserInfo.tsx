type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p>{user.name}</p>
    <a href="mailto:">{user.email}</a>
  </>
);
