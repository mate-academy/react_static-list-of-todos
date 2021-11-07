export interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  userRef: UserRef | null;
}

export interface UserRef {
  id: number;
  name: string;
  email: string;
}
