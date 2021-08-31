 import { User } from './UserType'
  
 export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user?: User;
}
