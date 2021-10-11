export interface User {
  id: number;
  name: string;
  email: string;
}

export type Executor = {
  user: User;
};
