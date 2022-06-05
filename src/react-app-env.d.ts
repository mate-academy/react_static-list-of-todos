// <reference types="react-scripts" />

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

export interface ToDo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export interface PrepareToDos extends ToDo {
  user: User | null,
}
