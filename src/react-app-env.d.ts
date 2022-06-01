/// <reference types="react-scripts" />
export interface Todos {
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

export interface PreparedTodos extends Todos {
  user:User | null,
}
