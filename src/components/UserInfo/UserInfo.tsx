type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <>
    <p>
      <span>Person In Charge: </span>
      {name}
    </p>
    <p>
      <span>E-Mail: </span>
      {email}
    </p>
  </>
);
