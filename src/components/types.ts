export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

export interface PreparedTodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null ;
}
