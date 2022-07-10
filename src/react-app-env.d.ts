interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

interface PreparedTodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null;
}
