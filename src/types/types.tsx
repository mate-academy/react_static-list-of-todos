export interface User {
  id: number,
  name: string,
  email: string,
}

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export interface FullTodo extends Todo {
  user: User | null,
}
