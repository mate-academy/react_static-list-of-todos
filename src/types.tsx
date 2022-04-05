import users from './api/users';

export type Todo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: typeof users[0] | null,
};

export type User = typeof users[0] | null;
