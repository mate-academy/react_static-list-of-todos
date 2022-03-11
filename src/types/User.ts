import { Todo } from './Todo';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  todos?: Todo[],
}

export type UserRequired = Required<User>;
