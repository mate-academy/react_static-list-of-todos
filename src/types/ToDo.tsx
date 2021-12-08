import { User } from './User';

interface ToDo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null,
}

export default ToDo;
