export interface User {
  name: string;
  username: string;
  website: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
  }
}
