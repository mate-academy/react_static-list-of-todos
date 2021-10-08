/// <reference types="react-scripts" />

interface User {
  name: string,
  username: string,
  email: string,
}

interface ToDo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null,
}
