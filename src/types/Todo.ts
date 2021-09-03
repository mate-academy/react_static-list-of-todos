export interface Todo {
  user: User | null,
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export interface User {
  name: string,
  username: string,
  email: string,
}
