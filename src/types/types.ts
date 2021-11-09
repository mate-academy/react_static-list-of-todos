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

export interface TodoWithUser extends Todo {
  user: User | null
}
