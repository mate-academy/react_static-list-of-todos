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

export interface TodoFull extends Todo {
  user: User | null,
}
