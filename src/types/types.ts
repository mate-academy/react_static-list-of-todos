export interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user?: User;
}

export interface User {
  name: string;
  email: string;
}
