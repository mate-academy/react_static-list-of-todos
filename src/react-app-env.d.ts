/// <reference types="react-scripts" />

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export interface User {
  id: number,
  name: string,
  email: string,
}

export interface FullTodo extends Todo {
  user?: User,
}
