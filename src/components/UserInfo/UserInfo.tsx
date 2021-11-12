type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <>
    <p>{name}</p>
    <p>{email}</p>
  </>
);
