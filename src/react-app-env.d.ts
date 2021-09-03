/// <reference types="react-scripts" />

interface User {
  name: string;
  username: string,
  email: string;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user?: User;
}
