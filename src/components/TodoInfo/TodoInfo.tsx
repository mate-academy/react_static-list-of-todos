import { FC } from 'react';
import { User } from '../../types/User';

interface Props {
  title: string;
  completed: boolean;
  user: User | null;
}

export const TodoInfo: FC<Props> = ({ title, completed, user }) => {
  const userInfo = user ? `Username: ${user.username}, UserPhone: ${user && user.phone}` : '';

  return (
    <>
      {`Title: ${title}, Completed: ${completed}, ${userInfo}`}
    </>
  );
};
