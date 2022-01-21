/// <reference types="react-scripts" />

interface PreparedTodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null,
}

interface User {
  username: string,
  email: string,
}
