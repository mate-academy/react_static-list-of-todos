/// <reference types="react-scripts" />

export interface User {
  id: number,
  name: string,
  username?: string,
  email?: string,
  address?: {
    street?: string,
    suite?: string,
    city?: string,
    zipcode?: string,
    geo?: {
      lat?: string,
      lng?: string,
    },
  },
  phone?: string,
  website?: string,
  company?: {
    name?: string,
    catchPhrase?: string,
    bs?: string,
  },
}

export interface Todos {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null,
}
