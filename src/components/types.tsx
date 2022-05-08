export type User = {
  name: string,
  username: string,
  email: string,
};

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user: User | null;
}
