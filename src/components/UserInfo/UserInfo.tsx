type UserProps = {
  name: string;
  email: string;
};

export const UserInfo: React.FC<UserProps> = ({ name, email }) => {
  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
