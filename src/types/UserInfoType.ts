export interface ItemType {
  name: string;
  email: string;
}

export interface TodoUserType {
  user: UserType | null;
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface UserType {
  id: number;
  name: string;
  email: string;
}
