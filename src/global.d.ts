interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null,
}

interface TodoInfo {
  title: string,
  completed: boolean
}

interface User {
  name: string,
  username: string,
  email: string,
}
