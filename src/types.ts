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

export interface NewTodo extends Todo {
  user: User | null,
}
