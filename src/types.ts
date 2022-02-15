export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user?: User | null;
}

export interface User {
  id: number;
  name: string;
  email: string;
  address: {
    geo: {
      lat: string;
      lng: string;
    }
  };
}
