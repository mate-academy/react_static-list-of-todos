export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export interface User {
  name: string,
  email: string,
}

export interface TodoUser {
  user: User | null
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}
