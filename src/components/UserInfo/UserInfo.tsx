type Props = {
  name: string;
  email: string;
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <div className="Todolist_user-info">
    <p>{`Name: ${name}`}</p>
    <p>{`Email: ${email}`}</p>
  </div>
);
