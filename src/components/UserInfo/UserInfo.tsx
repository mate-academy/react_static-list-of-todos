type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <>
    {`Userinfo: ${name}, ${email}`}
  </>
);
