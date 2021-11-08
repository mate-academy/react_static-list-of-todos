export interface Todo {
  user: User | null,
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export interface User {
  name: string,
  email: string,
  id: number,
}
