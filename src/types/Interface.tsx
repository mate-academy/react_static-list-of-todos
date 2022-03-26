import { IUser } from './IUser';

export interface ITodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: IUser | null;
}
