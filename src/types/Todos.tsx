import { Users } from './Users';

export interface Todos {
  userId : number,
  id: number,
  title: string,
  completed: boolean,
}

export interface PrepearedTodos {
  userId : number,
  id: number,
  title: string,
  completed: boolean,
  user: Users | null,
}
