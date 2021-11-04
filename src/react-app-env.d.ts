/// <reference types="react-scripts" />

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export interface Result  {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null,
} 
