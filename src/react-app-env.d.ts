/// <reference types="react-scripts" />
interface User {
  id: number,
  name: string,
  email: string,
}

interface ToDo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null,
}
