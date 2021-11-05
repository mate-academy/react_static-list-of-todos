export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: UserType | null,
}

export interface UserType {
  id: number,
  name: string,
  email: string,
}
