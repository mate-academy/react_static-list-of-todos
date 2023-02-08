type Props = {
  name: string;
  email: string;
};

export const UserInfo: React.FC<Props> = ({ name, email }) => {
  const mailto = `mailto:${email}`;

  return (
    <a className="UserInfo" href={mailto}>
      {name}
    </a>
  );
};
