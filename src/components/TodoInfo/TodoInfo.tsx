import { User } from '../../types/User';

type Props = {
  title: string,
  completed: boolean,
  user: User | null | undefined,
};

export const TodoInfo: React.FC<Props> = ({ title, completed, user }) => (
  <>
    {`Title: ${title}, Completed: ${completed}, Username: ${user && user.username}, UserPhone: ${user && user.phone}`}
  </>
);
