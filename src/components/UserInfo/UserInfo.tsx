type UserProps = {
  email: string,
  name: string,
};

export const UserInfo: React.FC<UserProps> = ({
  email,
  name,
}) => {
  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {`${name}`}
    </a>
  );
};
