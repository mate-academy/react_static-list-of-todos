import { User } from '../../types/User';

type Props = {
  user: User | null | undefined;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return user
    ? (
      <div className="todoList__user">
        <p>{`name: ${user.name}`}</p>
        <p>{`email: ${user.email}`}</p>
      </div>
    )
    : (
      <p className="todoList__user">
        no User;
      </p>
    );
};
