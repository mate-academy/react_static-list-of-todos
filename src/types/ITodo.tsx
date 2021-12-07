import { IUser } from './IUser';

export type ITodo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  author: IUser | null,
};
