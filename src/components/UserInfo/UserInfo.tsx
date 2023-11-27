import { User } from '../../types/User';

type UserInt = {
  user: User
};

export const UserInfo = ({ user }: UserInt) => (
  <section className="TodoList">
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </section>
);
