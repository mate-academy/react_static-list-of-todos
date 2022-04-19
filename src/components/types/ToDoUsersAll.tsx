export interface ToDoUser {
  id: number,
  name: string,
  username: string,
  email:string,
  phone: string,
}

export interface ToDoUsersAll {
  id: number;
  userId: number;
  title: string,
  completed: boolean,
  user: ToDoUser | null,
}
