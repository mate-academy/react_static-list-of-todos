type Props = {
  email: string;
  name: string;
};
// Add the required types and props
export const UserInfo: React.FC<Props> = ({ email, name }) => {
  return (
    <>
      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </>
  );
};
